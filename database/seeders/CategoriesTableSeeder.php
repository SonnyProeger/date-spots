<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\DateSpot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dateSpots = DateSpot::all();
        $categories = Category::factory(10)->create();

        $dateSpots->each(function ($dateSpot) use ($categories) {
            $categoryIds = $categories->random(rand(1, 5))->pluck('id')->toArray();

            $dateSpot->categories()->attach($categoryIds, ['created_at' => now(), 'updated_at' => now()]);
        });
    }
}
