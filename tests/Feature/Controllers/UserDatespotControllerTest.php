<?php

namespace Feature\Controllers;

use App\Models\Datespot;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserDatespotControllerTest extends TestCase
{
	use RefreshDatabase;


	public function test_it_displays_datespot_index_page() {
		$response = $this->get(route('datespots'));

		$response->assertOk();
		$response->assertInertia(fn($assert) => $assert
			->component('datespots')
		);
	}

	public function test_it_displays_datespot_details_page() {
		$datespot = Datespot::factory()->create();
		$response = $this->get("/datespots/{$datespot->id}-{$datespot->name}");

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('DatespotDetail')
			->has('datespot')
			->has('reviews')
		);
	}

	public function test_it_does_not_displays_datespot_details_page_with_incorrect_datespot() {
		$response = $this->get("/datespots/100-100");

		$response
			->assertStatus(404)
			->assertJson([
				'error' => 'DateSpot does not exist or Name does not match the ID.'
			]);;

	}

	public function test_it_displays_datespots_for_specific_location() {
		$datespot = Datespot::factory()->make();
		$city = $datespot->city;

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
		$datespot = Datespot::factory()->make();
		$city = $datespot->city;


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
