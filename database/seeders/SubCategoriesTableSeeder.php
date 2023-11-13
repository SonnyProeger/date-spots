<?php

namespace Database\Seeders;

use App\Models\DateSpot;
use App\Models\Subcategory;
use Illuminate\Database\Seeder;

class SubCategoriesTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$dateSpots = DateSpot::all();
		$subcategories = Subcategory::factory(10)->create();

		$dateSpots->each(function ($dateSpot) use ($subcategories) {
			$subcategoryIds = $subcategories->random(rand(1, 5))->pluck('id')->toArray();

			$dateSpot->subCategories()->attach($subcategoryIds, ['created_at' => now(), 'updated_at' => now()]);
		});
	}
}
