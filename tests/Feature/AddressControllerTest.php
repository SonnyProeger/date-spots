<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class AddressControllerTest extends TestCase
{

	use RefreshDatabase;

	public function testGetAddressDetailsSuccess() {
		Http::fake([
			'*' => Http::response([
				'street' => 'Sample Street',
				'city' => 'Sample City',
			], 200),
		]);


		$postalCode = '1234pe';
		$houseNumber = '301';

		// Hit the getAddressDetails endpoint with mocked data
		$response = $this->get('/api/getAddressDetails', [
			'postal_code' => $postalCode,
			'house_number' => $houseNumber,
		]);


		// Assert the response status and content
		$response->assertStatus(200)
			->assertJson([
				'street' => 'Sample Street',
				'city' => 'Sample City',
			]);
	}

	public function testGetAddressDetailsFailed() {
		// Mocking the API response for a failed request
		Http::fake([
			'*' => Http::response(['error' => 'Failed to fetch address details'], 404),
		]);

		$postalCode = '1102pe';
		$houseNumber = 301;

		// Hit the getAddressDetails endpoint with mocked data
		$response = $this->get('/api/getAddressDetails', [
			'postal_code' => $postalCode,
			'house_number' => $houseNumber,
		]);

		// Assert the response status and error message
		$response->assertStatus(404)
			->assertJson(['error' => 'Failed to fetch address details']);
	}

}
