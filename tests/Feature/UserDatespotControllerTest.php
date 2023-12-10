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

	/** @test */
	public function testDatespotIndex() {
		Datespot::factory()->count(5)->create();

		$response = $this->get('/datespots');

		$response->assertOk();
		$response->assertInertia(fn($assert) => $assert
			->component('Datespots')
		);
	}

	public function testDatespotShow() {

		$response = $this->get("/datespots/{$this->datespot->id}-{$this->datespot->name}");

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('DatespotDetail')
			->has('datespot')
			->has('reviews')
		);
	}

	public function testDatespotShowByLocation() {
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

	public function testDatespotFilterByLocation() {
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
