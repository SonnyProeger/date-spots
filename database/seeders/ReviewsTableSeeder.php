<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		Review::factory(60)->create();
	}
}
