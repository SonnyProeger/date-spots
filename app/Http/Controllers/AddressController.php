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

		// Make HTTP request to the Postcode.tech API using Laravel HTTP client
		$response = Http::withHeaders([
			'Authorization' => 'Bearer '.$apiKey,
		])->get('https://postcode.tech/api/v1/postcode/full', [
			'postcode' => $postalCode,
			'number' => $houseNumber,
		]);

		// Check if the request was successful
		if ($response->successful()) {
			$addressDetails = $response->json(); // Get the response as JSON

			// Process the addressDetails as needed and return the data
			return response()->json($addressDetails);
		}

		// Handle unsuccessful response or errors
		return response()->json(['error' => 'Failed to fetch address details'], $response->status());
	}
}
