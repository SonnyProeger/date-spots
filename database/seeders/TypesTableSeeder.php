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
	public function run(): void {
		$datespots = Datespot::all();

		$types = Type::factory(5)->create();

		$datespots->each(function ($datespot) use ($types) {
			$typeIds = $types->random(rand(1, 3))->pluck('id')->toArray();

			$datespot->types()->attach($typeIds, ['created_at' => now(), 'updated_at' => now()]);
		});

	}
}
