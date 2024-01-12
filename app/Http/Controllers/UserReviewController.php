<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Services\UserDatespotService;
use App\Services\UserReviewService;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserReviewController extends Controller
{

	private UserDatespotService $datespotService;
	private UserReviewService $reviewService;

	public function __construct(UserDatespotService $datespotService, UserReviewService $reviewService) {
		$this->datespotService = $datespotService;
		$this->reviewService = $reviewService;
	}

	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$user = Auth::user();
		$reviews = [];

		if ($user) {
			$reviews = $this->reviewService->getAllReviewsForUser($user->id);
		};

		return Inertia::render('Reviews/Index', [
			'reviews' => $reviews,
		]);
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
		$validatedData = $request->validate([
			'datespotId' => 'required',
			'reviewTitle' => 'required|string|min:5|max:50',
			'reviewText' => 'required|string|min:150|max:1000',
			'rating' => 'required|integer|min:1|max:5',
			'selectedDate' => 'required|date_format:Y-m',
		]);

		$datespotId = $validatedData['datespotId'];

//		$alreadyReviewed = $this->datespotService->datespotAlreadyReviewed($datespotId);

//		$this->authorize(ReviewPolicy::class.'@create', $alreadyReviewed);

		$datespotName = $this->datespotService->getDatespotNameById($datespotId);

		$dateVisited = Carbon::createFromFormat('Y-m', $validatedData['selectedDate'])->startOfMonth();

		Review::create([
			'user_id' => Auth::user()->id,
			'datespot_id' => $datespotId,
			'title' => $validatedData['reviewTitle'],
			'comment' => $validatedData['reviewText'],
			'rating' => $validatedData['rating'],
			'date_visited' => $dateVisited,
		]);

		return Redirect::route('user-datespots.show', [
			'name' => $datespotName,
			'id' => $datespotId
		])->with('success', 'Review created.');
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
	public function destroy(string $id, string $name, string $reviewId) {
		$review = Review::query()->findOrFail($reviewId);

		$this->authorize('delete', $review);

		$review->forceDelete();

		return Redirect::back()->with('success', 'Review deleted.');
	}
}
