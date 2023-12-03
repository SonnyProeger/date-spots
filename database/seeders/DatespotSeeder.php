<?php

namespace Database\Seeders;

use App\Models\Datespot;
use App\Models\DatespotImage;
use Illuminate\Database\Seeder;


class DatespotSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		$datespots = Datespot::factory(10)->create();

		$datespots->each(function ($datespot) {
//			DatespotImage::factory(3)->create([
//				'datespot_id' => $datespot->id,
//				'url' => 'https://placehold.co/600x400',
//			]);
		});
	}
}
