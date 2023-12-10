<?php

namespace Tests\Feature;

use App\Models\Datespot;
use App\Models\Type;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserDatespotControllerTest extends TestCase
{
	use RefreshDatabase;

	protected function setUp(): void {
		parent::setUp();
		$this->seed(DatabaseSeeder::class);
		$this->datespot = Datespot::first();

		$this->datespots = Datespot::all();

		$this->types = Type::with('categories.subcategories')->get();
	}

	public function test_it_displays_datespot_index_page() {
		Datespot::factory()->count(5)->create();

		$response = $this->get(route('datespots'));

		$response->assertOk();
		$response->assertInertia(fn($assert) => $assert
			->component('Datespots')
		);
	}

	public function test_it_displays_datespot_details_page() {

		$response = $this->get("/datespots/{$this->datespot->id}-{$this->datespot->name}");

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('DatespotDetail')
			->has('datespot')
			->has('reviews')
		);
	}

	public function test_it_displays_datespots_for_specific_location() {
		$city = $this->datespot->city;

		$response = $this->get("/datespots/{$city}");

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('DatespotsCity')
			->has('datespots')
			->where('city', $city)
			->has('types')
		);
	}

	public function test_it_filters_datespots_by_location_and_types() {
		$city = $this->datespot->city;


		$response = $this->post("/datespots/{$city}", [
			'selectedTypes' => [1, 2],
		]);

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('DatespotsCity')
			->has('datespots')
			->where('city', $city)
			->has('types')
		);
	}

}
