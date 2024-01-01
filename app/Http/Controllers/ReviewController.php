<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Services\UserDatespotService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{

	private UserDatespotService $datespotService;

	public function __construct(UserDatespotService $datespotService) {
		$this->datespotService = $datespotService;
	}

	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		//
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create($id, $name) {
		$datespotExists = $this->datespotService->datespotExistsByIdAndName($id, $name);

		if (!$datespotExists) {
			return Inertia::render('Error', [
				'status' => 404,
				'description' => 'Datespot not found.'
			]);
		}

		$alreadyReviewed = $this->datespotService->datespotAlreadyReviewed($id);

		if ($alreadyReviewed) {
			return Inertia::render('Error', [
				'status' => 403,
				'description' => 'You have already reviewed this datespot.'
			]);
		}

		$datespot = $this->datespotService->getDatespotByIdAndName($id, $name);

		return Inertia::render('Reviews/Create', [
			'datespot' => $datespot,
		]);

	}


	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Review $review) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Review $review) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Review $review) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Review $review) {
		//
	}
}
