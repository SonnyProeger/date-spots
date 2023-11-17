<?php

namespace App\Http\Controllers;

use App\Helpers\StringHelper;
use App\Models\Category;
use App\Models\Datespot;
use App\Models\Subcategory;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DatespotController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$datespots = Datespot::with('types')->get();

		return Inertia::render('datespots', [
			'datespots' => $datespots,
		]);
	}

	/**
	 * Display the specified resource.
	 */
	public
	function show($id, $name) {
		$totalDatespots = Datespot::count();
		$datespot = Datespot::query()->findOrFail($id);
		$formattedName = StringHelper::replaceHyphensWithSpaces($name);

		// Check if the name from the url matches the name in the database
		if ($datespot->name !== $formattedName) {
			return response()->json(['error' => 'DateSpot Name does not match the ID.'], 404);
		}


		return Inertia::render('DatespotDetail', [
			'datespot' => $datespot,
			'totalDatespots' => $totalDatespots,
		]);
	}


	/**
	 * Display a listing of the resource by location
	 */

	public function showByLocation($city) {
		$query = Datespot::query();

		if ($city) {
			$query->where('city', $city);
		}
		$categories = Category::all();
		$subcategories = Subcategory::all();
		$types = Type::all();

		$datespots = $query->get();

		return Inertia::render('DatespotsCity', [
			'datespots' => $datespots,
			'city' => $city,
			'types' => $types,
			'categories' => $categories,
			'subcategories' => $subcategories,
		]);
	}

	public function filterByLocation(Request $request, $city) {
		$query = Datespot::query();

		if ($city) {
			$query->where('city', $city);
		}
		$categories = Category::all();
		$subcategories = Subcategory::all();
		$types = Type::all();
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
			$filteredDatespots = $query->with('types', 'categories', 'subcategories')->get();

		} else {
			$filteredDatespots = $query->get();
		}


		return Inertia::render('DatespotsCity', [
			'datespots' => $filteredDatespots,
			'city' => $city,
			'types' => $types,
			'categories' => $categories,
			'subcategories' => $subcategories,
		]);
	}
}
