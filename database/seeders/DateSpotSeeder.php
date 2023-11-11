<?php

namespace Database\Seeders;

use App\Models\DateSpot;
use App\Models\DateSpotImage;
use Illuminate\Database\Seeder;


class DateSpotSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$dateSpots = DateSpot::factory(10)->create();

		$dateSpots->each(function ($dateSpot) {
			DateSpotImage::factory(3)->create([
				'date_spot_id' => $dateSpot->id,
				'url' => 'https://placehold.co/600x400',
			]);
		});
	}
}
