<?php

namespace Database\Seeders;

use App\Models\Datespot;
use Illuminate\Database\Seeder;

class DatespotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datespots = Datespot::factory(10)->create();
    }
}
