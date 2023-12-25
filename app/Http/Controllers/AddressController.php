<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AddressController extends Controller
{
	public function getAddressDetails(Request $request) {
		$apiKey = config('app.address_api_key');
		$postalCode = $request->input('postal_code');
		$houseNumber = $request->input('house_number');

		$response = Http::withHeaders([
			'Authorization' => 'Bearer '.$apiKey,
		])->get('https://postcode.tech/api/v1/postcode/full', [
			'postcode' => $postalCode,
			'number' => $houseNumber,
		]);

		if ($response->successful()) {
			$addressDetails = $response->json();

			return response()->json($addressDetails);
		}

		return response()->json(['error' => 'Failed to fetch address details'], $response->status());
	}
}
