<?php

namespace App\Http\Controllers;

use App\Models\Datespot;
use App\Models\Type;
use App\Services\UserDatespotService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DatespotController extends Controller
{

	protected $datespotService;

	public function __construct(UserDatespotService $datespotService) {
		$this->datespotService = $datespotService;
	}

	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$datespots = $this->datespotService->getAllDateSpotsWithTypes();

		return Inertia::render('datespots', [
			'datespots' => $datespots,
		]);
	}

	/**
	 * Display the specified resource.
	 */
	public
	function show($id, $name) {
		$datespot = $this->datespotService->getDateSpotByIdAndName($id, $name);

		// Check if the name from the url matches the name in the database
		if (!$datespot) {
			return response()->json(['error' => 'DateSpot Name does not match the ID.'], 404);
		}

		return Inertia::render('DatespotDetail', [
			'datespot' => $datespot,
		]);
	}


	/**
	 * Display a listing of the resource by location
	 */

	public function showByLocation($city) {

		$datespots = $this->datespotService->getDatespotsByLocation($city);


		// Retrieve Types with associated Categories and Subcategories related to the given Datespots
		$types = Type::with('categories.subcategories')->get();
		return Inertia::render('DatespotsCity', [
			'datespots' => $datespots,
			'city' => $city,
			'types' => $types,
		]);
	}

	public function filterByLocation(Request $request, $city) {
		$query = Datespot::query();

		if ($city) {
			$query->where('city', $city);
		}
		$types = Type::with([
			'categories' => function ($query) {
				$query->select('id', 'name', 'type_id');
			},
			'categories.subcategories' => function ($query) {
				$query->select('id', 'name', 'category_id');
			}
		])->select('id', 'name')->get();
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
		]);
	}
}
