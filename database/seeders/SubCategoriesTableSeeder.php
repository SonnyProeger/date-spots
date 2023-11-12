<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Seeder;

class SubCategoriesTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$subcategoriesCount = 3;

		$categories = Category::all();

		foreach ($categories as $category) {
			SubCategory::factory($subcategoriesCount)->create([
				'category_id' => $category->id,
			]);
		}
	}
}
