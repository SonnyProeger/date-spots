<?php

namespace Tests\Feature\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class AddressControllerTest extends TestCase
{

	use RefreshDatabase;

	public function test_get_address_details_success_test() {
		Http::fake([
			'*' => Http::response([
				'street' => 'Sample Street',
				'city' => 'Sample City',
			], 200),
		]);


		$postalCode = '1234pe';
		$houseNumber = '301';

		$response = $this->get('/api/getAddressDetails', [
			'postal_code' => $postalCode,
			'house_number' => $houseNumber,
		]);


		$response->assertStatus(200)
			->assertJson([
				'street' => 'Sample Street',
				'city' => 'Sample City',
			]);
	}

	public function test_get_address_details_failed_test() {
		Http::fake([
			'*' => Http::response(['error' => 'Failed to fetch address details'], 404),
		]);

		$postalCode = '1102pe';
		$houseNumber = 301;

		$response = $this->get('/api/getAddressDetails', [
			'postal_code' => $postalCode,
			'house_number' => $houseNumber,
		]);

		$response->assertStatus(404)
			->assertJson(['error' => 'Failed to fetch address details']);
	}

}
