<?php

namespace App\Services;

use App\Models\Review;
use DateTime;

class UserReviewService
{
	public function getAllReviewsForDatespot($datespot_id) {
		$reviews = Review::query()
			->where('datespot_id', $datespot_id)
			->with('user')
			->paginate(10)
			->withQueryString()
			->through(function ($review) {
				$formattedDate = DateTime::createFromFormat('Y-m-d', $review->date_visited)
					->format('F Y');
				$formattedCreatedOn = $review->getFormattedDate();

				return [
					'id' => $review->id,
					'title' => $review->title,
					'content' => $review->comment,
					'user' => $review->user->name,
					'rating' => $review->rating,
					'date_visited' => $formattedDate,
					'created_on' => $formattedCreatedOn,
				];
			});
		return $reviews;
	}


}