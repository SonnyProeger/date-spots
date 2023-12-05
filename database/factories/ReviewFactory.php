<?php

namespace Database\Factories;

use App\Models\Datespot;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends Factory<Review>
 */
class ReviewFactory extends Factory
{
	protected $model = Review::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array {

		return [
			'user_id' => User::all()->random(),
			'datespot_id' => Datespot::all()->random(),
			'title' => $this->faker->title,
			'comment' => $this->faker->paragraph,
			'rating' => $this->faker->numberBetween(1, 5),
			'date_visited' => Carbon::instance($this->faker->dateTimeBetween('-2 years', 'now'))->format('Y-m-d'),
		];
	}
}
