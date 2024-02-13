<?php

namespace Database\Seeders;

use App\Models\Datespot;
use App\Models\Type;
use Illuminate\Database\Seeder;

class TypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datespots = Datespot::all();

        // Create all 5 types
        $types = collect([
            Type::create(['name' => 'Activities']),
            Type::create(['name' => 'Entertainment']),
            Type::create(['name' => 'Food']),
            Type::create(['name' => 'Outdoor']),
            Type::create(['name' => 'Special Occasions']),
        ]);

        $datespots->each(function ($datespot) use ($types) {
            $typeIds = $types->random(rand(1, 3))->pluck('id')->toArray();

            $datespot->types()->attach($typeIds, ['created_at' => now(), 'updated_at' => now()]);
        });

    }
}
