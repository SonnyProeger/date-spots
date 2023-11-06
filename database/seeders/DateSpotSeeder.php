<?php

namespace Database\Seeders;

use App\Models\DateSpot;
use Illuminate\Database\Seeder;
use Database\Factories\DateSpotFactory;


class DateSpotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DateSpot::factory()->count(10)->create();
    }
}
