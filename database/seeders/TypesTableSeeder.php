<?php

namespace Database\Seeders;

use App\Models\DateSpot;
use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dateSpots = DateSpot::all();

        $types = Type::factory(5)->create();

        $dateSpots->each(function ($dateSpot) use ($types) {
            $typeIds = $types->random(rand(1, 3))->pluck('id')->toArray();

            $dateSpot->types()->attach($typeIds, ['created_at' => now(), 'updated_at' => now()]);
        });

    }
}
