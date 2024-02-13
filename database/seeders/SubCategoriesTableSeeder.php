<?php

namespace Database\Seeders;

use App\Models\Datespot;
use App\Models\Subcategory;
use Illuminate\Database\Seeder;

class SubCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datespots = Datespot::all();
        $subcategories = Subcategory::factory(10)->create();

        $datespots->each(function ($datespot) use ($subcategories) {
            $subcategoryIds = $subcategories->random(rand(1, 5))->pluck('id')->toArray();

            $datespot->subCategories()->attach($subcategoryIds, ['created_at' => now(), 'updated_at' => now()]);
        });
    }
}
