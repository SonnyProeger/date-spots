<?php

namespace Database\Factories;

use App\Models\Datespot;
use App\Providers\DutchFakerProvider;
use Faker\Factory as FakerFactory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Datespot>
 */
class datespotFactory extends Factory
{
	protected $model = Datespot::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array {
		$faker = FakerFactory::create('nl_NL');

		$dutchProvider = new DutchFakerProvider($faker);

		$faker->addProvider($dutchProvider);

		return [
			'datespot_id' => $faker->unique()->uuid,
			'name' => $faker->company,
			'tagline' => "A small cozy business in a nice city",
			'lat' => $faker->latitude,
			'lng' => $faker->longitude,
			'city' => $faker->dutchCity,
			'postal_code' => $faker->postcode,
			'country' => 'Netherlands',
			'province' => $faker->dutchState,
			'street_name' => $faker->streetName,
			'house_number' => $faker->randomNumber(),
			'phone_number' => $faker->phoneNumber,
			'website' => $faker->url,
			'email' => $faker->email,
			'business_status' => $faker->randomElement(['OPERATIONAL', 'CLOSED']),
			'open_now' => $faker->boolean,
			'icon_url' => $faker->imageUrl(),
		];
	}
}
