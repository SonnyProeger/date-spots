<?php

namespace App\Services;

use App\Helpers\StringHelper;
use App\Models\Review;
use Illuminate\Support\Carbon;

class UserReviewService
{
    public function getAllReviewsForDatespot($datespot_id)
    {
        $reviews = Review::query()
            ->where('datespot_id', $datespot_id)
            ->with('user')
            ->orderByDesc('created_at')
            ->paginate(10)
            ->withQueryString()
            ->through(function ($review) {
                $formattedDate = $review->getFormattedDateForDateVisited();
                $formattedCreatedOn = $review->getFormattedDateForCreatedOn();

                return [
                    'id' => $review->id,
                    'title' => $review->title,
                    'content' => $review->comment,
                    'user' => [
                        'name' => $review->user->name,
                        'profile_photo_url' => $review->user->profile_photo_path,
                    ],
                    'rating' => $review->rating,
                    'date_visited' => $formattedDate,
                    'created_on' => $formattedCreatedOn,
                ];
            });

        return $reviews;
    }

    public function getAllReviewsForUser($user_id)
    {
        $reviews = Review::query()
            ->where('user_id', $user_id)
            ->with('datespot')
            ->orderByDesc('created_at')
            ->paginate(5)
            ->withQueryString()
            ->through(function ($review) {
                $formattedCreatedOn = $review->getFormattedDateForCreatedOn();

                return [
                    'id' => $review->id,
                    'title' => $review->title,
                    'content' => $review->comment,
                    'datespot' => [
                        'name' => $review->datespot->name,
                        'formatted_name' => StringHelper::replaceSpacesWithHyphens($review->datespot->name),
                        'id' => $review->datespot->id,
                        'photo_url' => $review->datespot->getFirstTemporaryUrl(Carbon::now()->addMinutes(5), 'images'),
                        'address' => $review->datespot->getCityAndStateAttribute(),
                    ],
                    'rating' => $review->rating,
                    'date_visited' => $review->getFormattedDateForDateVisited(),
                    'created_on' => $formattedCreatedOn,
                ];
            });

        return $reviews;
    }
}
