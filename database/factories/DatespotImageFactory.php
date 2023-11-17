<?php

namespace Database\Factories;

use App\Models\datespotImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\datespotImage>
 */
class datespotImageFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */

	protected $model = datespotImage::class;

	public function definition(): array
	{
		return [
			'url' => "https://placehold.co/600x400",

		];
	}
}
