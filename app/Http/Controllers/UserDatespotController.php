<?php

namespace App\Http\Controllers;

use App\Services\UserDatespotService;
use App\Services\UserReviewService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserDatespotController extends Controller
{

	private UserDatespotService $datespotService;
	private UserReviewService $reviewService;

	public function __construct(UserDatespotService $datespotService, UserReviewService $userReviewService) {
		$this->datespotService = $datespotService;
		$this->reviewService = $userReviewService;
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

		$reviews = $this->reviewService->getAllReviewsForDatespot($id);

		if (!$datespot) {
			return response()->json(['error' => 'DateSpot Name does not match the ID.'], 404);
		}

		return Inertia::render('DatespotDetail', [
			'datespot' => $datespot,
			'reviews' => $reviews,
		]);
	}


	/**
	 * Display a listing of the resource by location
	 */

	public function showByLocation($city) {

		$datespots = $this->datespotService->getDatespotsByLocation($city);

		$types = $this->datespotService->getAllTypesWithCategoriesAndSubcategories();
		return Inertia::render('DatespotsCity', [
			'datespots' => $datespots,
			'city' => $city,
			'types' => $types,
		]);
	}

	public function filterByLocation(Request $request, $city) {

		$types = $this->datespotService->getAllTypesWithCategoriesAndSubcategories();

		$filteredDatespots = $this->datespotService->filterDateSpotsByLocation($city, $request);


		return Inertia::render('DatespotsCity', [
			'datespots' => $filteredDatespots,
			'city' => $city,
			'types' => $types,
		]);
	}
}
