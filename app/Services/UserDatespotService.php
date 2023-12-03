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
use Illuminate\Support\Facades\DB;

class UserDatespotService
{
	public function getAllDateSpotsWithTypes(): Collection|array {
		return Datespot::with('types')->get();
	}

	public function getDateSpotByIdAndName($id, $name): Model|Collection|Builder|array|null {
		$datespot = Datespot::with('types', 'categories', 'subcategories', 'media')
			->select('*',
				DB::raw("(SELECT COUNT(*) FROM datespots WHERE city = (SELECT city FROM datespots WHERE id = $id)) AS all_datespots"))
			->where('id', $id)
			->withCount('reviews')
			->firstOrFail();
		$formattedName = StringHelper::replaceHyphensWithSpaces($name);
		if ($datespot->name !== $formattedName) {
			return null; // Or throw an exception indicating the mismatch
		}
		return $datespot;
	}

	public function getDatespotsByLocation($city) {
		$datespots = Datespot::withCount('reviews')
			->addSelect(DB::raw("(SELECT COUNT(*) FROM datespots) AS all_datespots"))
			->withAvg('reviews', 'rating')
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
				];
			});
		return $datespots;
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

	public function filterDateSpotsByLocation($city, $requestData): Collection|array {
		$query = Datespot::query()->where('city', $city);


		return $query->get();
	}

}
