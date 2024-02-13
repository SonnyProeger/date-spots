<?php

namespace Database\Seeders;

use App\Models\Datespot;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::all()->each(function ($user) {
            Datespot::all()->each(function ($datespot) use ($user) {
                // Check if the user has already reviewed the datespot
                if (! Review::where('user_id', $user->id)->where('datespot_id', $datespot->id)->exists()) {
                    // If the user hasn't reviewed the datespot, create a review
                    Review::factory()->create([
                        'user_id' => $user->id,
                        'datespot_id' => $datespot->id,
                    ]);
                }
            });
        });
    }
}
