<?php

namespace App\Http\Controllers;

use App\Helpers\StringHelper;
use App\Models\Category;
use App\Models\DateSpot;
use App\Models\Subcategory;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DateSpotController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$dateSpots = DateSpot::with('types')->get();

		return Inertia::render('DateSpots', [
			'dateSpots' => $dateSpots,
		]);
	}

	/**
	 * Display a listing of the resource by location
	 */

	public function showByLocation($city)
	{
		$query = DateSpot::query();

		if ($city) {
			$query->where('city', $city);
		}
		$categories = Category::all();
		$subcategories = Subcategory::all();
		$types = Type::all();

		$dateSpots = $query->get();

		return Inertia::render('DateSpotsCity', [
			'dateSpots' => $dateSpots,
			'city' => $city,
			'types' => $types,
			'categories' => $categories,
			'subcategories' => $subcategories,
		]);
	}

	public function filterByLocation(Request $request, $city)
	{
		$query = DateSpot::query();

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
			$filteredDateSpots = $query->with('types', 'categories', 'subcategories')->get();

		} else {
			$filteredDateSpots = $query->get();
		}


		return Inertia::render('DateSpotsCity', [
			'dateSpots' => $filteredDateSpots,
			'city' => $city,
			'types' => $types,
			'categories' => $categories,
			'subcategories' => $subcategories,
		]);
	}


	/**
	 * Show the form for creating a new resource.
	 */
	public
	function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public
	function store(
		Request $request
	) {
		//
	}

	/**
	 * Display the specified resource.
	 */
	public
	function show(
		$id,
		$name
	) {
		$totalDateSpots = DateSpot::count();
		$dateSpot = DateSpot::query()->findOrFail($id);
		$formattedName = StringHelper::replaceHyphensWithSpaces($name);

		// Check if the name from the url matches the name in the database
		if ($dateSpot->name !== $formattedName) {
			return response()->json(['error' => 'DateSpot Name does not match the ID.'], 404);
		}


		return Inertia::render('DateSpotDetail', [
			'dateSpot' => $dateSpot,
			'totalDateSpots' => $totalDateSpots,
		]);
	}


	/**
	 * Show the form for editing the specified resource.
	 */
	public
	function edit(
		DateSpot $dateSpot
	) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public
	function update(
		Request $request,
		DateSpot $dateSpot
	) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public
	function destroy(
		DateSpot $dateSpot
	) {
		//
	}
}
