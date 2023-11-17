<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Datespot;
use Illuminate\Database\Seeder;


class CategoriesTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		$datespots = Datespot::all();
		$categories = Category::factory(10)->create();

		$datespots->each(function ($datespot) use ($categories) {
			$categoryIds = $categories->random(rand(1, 5))->pluck('id')->toArray();

			$datespot->categories()->attach($categoryIds, ['created_at' => now(), 'updated_at' => now()]);
		});
	}
}
