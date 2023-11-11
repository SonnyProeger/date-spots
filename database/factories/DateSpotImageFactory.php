<?php

namespace Database\Factories;

use App\Models\DateSpotImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DateSpotImage>
 */
class DateSpotImageFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */

	protected $model = DateSpotImage::class;

	public function definition(): array
	{
		return [
			'url' => "https://placehold.co/600x400",

		];
	}
}
