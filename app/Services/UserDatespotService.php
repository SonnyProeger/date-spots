<?php

namespace App\Services;

use App\Helpers\StringHelper;
use App\Models\Category;
use App\Models\Datespot;
use App\Models\Subcategory;
use App\Models\Type;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class UserDatespotService
{
	public function getAllDatespotsWithTypes(): Collection|array {
		return Datespot::with('types')->get();
	}

	public function getDatespotByIdAndName($id, $name): Model|Collection|Builder|array|null {
		$datespot = Datespot::where('id', $id)->firstOrFail();

		if (!$datespot) {
			return null;
		}

		$formattedName = StringHelper::replaceHyphensWithSpaces($name);
		if ($datespot->name !== $formattedName) {
			return null;
		}

		$datespot = $datespot->load(['types', 'categories', 'subcategories', 'media'])
			->loadCount('reviews')
			->loadAvg('reviews', 'rating');

		$avgRating = $this->formatAvgRating($datespot);
		$datespot->rating = $avgRating;
		$datespot->all_datespots = Datespot::where('city', $datespot->city)->count();

		foreach ($datespot->media as $mediaItem) {
			$temporaryUrl = $mediaItem->getTemporaryUrl(Carbon::now()->addMinutes(5));
			$mediaItem->temporary_url = $temporaryUrl;
		}

		return $datespot;
	}

	public function getDatespotsByLocation($city) {
		$datespots = Datespot::withCount('reviews')
			->withAvg('reviews', 'rating')
			->with('media')
			->get()
			->where('city', $city)
			->map(function ($datespot) {
				$avgRating = round($datespot->reviews_avg_rating, 2);
				$allDatespotsCount = Datespot::count();
				return [
					'id' => $datespot->id,
					'name' => $datespot->name,
					'city' => $datespot->city,
					'tagline' => $datespot->tagline,
					'photo_url' => $datespot->photo_url,
					'rating' => $avgRating,
					'reviews_count' => $datespot->reviews_count,
					'all_datespots' => $allDatespotsCount,
					'cover_image' => $datespot->getFirstTemporaryUrl(Carbon::now()->addMinutes(5), 'images'),
				];
			});
		return $datespots;
	}

	public function getAllTypesWithCategoriesAndSubcategories(): Collection|array {
		return Type::with([
			'categories' => function ($query) {
				$query->select('id', 'name', 'type_id');
			},
			'categories.subcategories' => function ($query) {
				$query->select('id', 'name', 'category_id');
			}
		])->select('id', 'name')->get();
	}

	public function getSubcategoriesForDatespots($datespots): Collection {
		$datespotIds = collect($datespots)->pluck('id')->toArray();

		$subcategories = Subcategory::whereHas('datespots', function ($query) use ($datespotIds) {
			$query->whereIn('datespots.id', $datespotIds);
		})->get();

		return $subcategories;
	}

	public function getCategoriesForSubcategories($subcategories) {
		$categoryIds = $subcategories->pluck('category_id')->unique()->toArray();

		$categories = Category::whereIn('id', $categoryIds)->get();

		return $categories;
	}

	public function getTypesForCategories($categories) {
		$typeIds = $categories->pluck('type_id')->unique()->toArray();

		$types = Type::whereIn('id', $typeIds)->get();

		return $types;
	}

	public function filterDatespotsByLocation($city, $request) {
		$query = Datespot::query();

		if ($city) {
			$query->where('city', $city);
		}

		$requestData = json_decode($request->getContent(), true);


		if (!empty($requestData['selectedTypes']) || !empty($requestData['selectedCategories']) || !empty($requestData['selectedSubcategories'])) {
			{
				if ($request->filled('selectedTypes')) {
					$selectedTypes = $request->input('selectedTypes');
					$query->whereHas('types', function ($typeQuery) use ($selectedTypes) {
						$typeQuery->whereIn('types.id', $selectedTypes);
					});
				} elseif ($request->filled('selectedCategories')) {
					// If types are not selected but a category under type is selected
					$selectedCategories = collect($request->input('selectedCategories'))
						->map(function ($category) {
							return explode('-', $category)[1];
						})
						->toArray();

					$query->whereHas('categories', function ($categoryQuery) use ($selectedCategories) {
						$categoryQuery->whereIn('categories.id', $selectedCategories);
					});
				} elseif ($request->filled('selectedSubcategories')) {
					// If neither types nor categories are selected but a subcategory is selected
					$selectedSubcategories = collect($request->input('selectedSubcategories'))
						->map(function ($subcategory) {
							return explode('-', $subcategory)[1];
						})
						->toArray();

					$query->whereHas('subcategories', function ($subcategoryQuery) use ($selectedSubcategories) {
						$subcategoryQuery->whereIn('subcategories.id', $selectedSubcategories);
					});
				}
			}
			$filteredDatespots = $query->with('types', 'categories', 'subcategories')
				->withCount('reviews')
				->withAvg('reviews', 'rating')
				->with('media')
				->get()
				->where('city', $city)
				->map(function ($datespot) {
					$avgRating = round($datespot->reviews_avg_rating, 2);
					$allDatespotsCount = Datespot::count();

					return [
						'id' => $datespot->id,
						'name' => $datespot->name,
						'city' => $datespot->city,
						'tagline' => $datespot->tagline,
						'photo_url' => $datespot->photo_url,
						'rating' => $avgRating,
						'reviews_count' => $datespot->reviews_count,
						'all_datespots' => $allDatespotsCount,
						'cover_image' => $datespot->getFirstTemporaryUrl(Carbon::now()->addMinutes(5), 'images'),
					];
				});
		} else {
			$filteredDatespots = $query->withCount('reviews')
				->addSelect(DB::raw("(SELECT COUNT(*) FROM datespots) AS all_datespots"))
				->withAvg('reviews', 'rating')
				->with('media')
				->get()
				->where('city', $city)
				->map(function ($datespot) {
					$avgRating = round($datespot->reviews_avg_rating, 2);
					return [
						'id' => $datespot->id,
						'name' => $datespot->name,
						'city' => $datespot->city,
						'tagline' => $datespot->tagline,
						'photo_url' => $datespot->photo_url,
						'rating' => $avgRating,
						'reviews_count' => $datespot->reviews_count,
						'all_datespots' => $datespot->all_datespots,
						'cover_image' => $datespot->getFirstTemporaryUrl(Carbon::now()->addMinutes(5), 'images'),
					];
				});
		}
		return $filteredDatespots;
	}


	public function formatAvgRating(Model|Builder $datespot): string {
		$avgRating = number_format(round($datespot->reviews_avg_rating, 2),
			max(1, substr_count(round($datespot->reviews_avg_rating, 2), '.')));
		return $avgRating;
	}

	public function datespotExistsByIdAndName($id, $name): bool {
		$datespot = Datespot::where('id', $id)
			->where('name', StringHelper::replaceHyphensWithSpaces($name))
			->first();

		if ($datespot) {
			return true;
		} else {
			return false;
		}
	}

	public function datespotAlreadyReviewed($id): bool {
		$datespot = Datespot::where('id', $id)->first();

		if ($datespot->reviews->where('user_id', auth()->user()->id)->count() > 0) {
			return true;
		} else {
			return false;
		}
	}

}
