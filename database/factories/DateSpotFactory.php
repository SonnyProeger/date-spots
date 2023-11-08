<?php

namespace Database\Factories;

use App\Models\DateSpot;
use App\Providers\DutchFakerProvider;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;
use Faker\Generator;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DateSpot>
 */
class DateSpotFactory extends Factory
{
    protected $model = DateSpot::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create('nl_NL');

        $dutchProvider = new DutchFakerProvider($faker);

        $faker->addProvider($dutchProvider);

        return [
            'date_spot_id' => $faker->unique()->uuid,
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
            'business_status' => $faker->randomElement(['OPERATIONAL', 'CLOSED']),
            'open_now' => $faker->boolean,
            'photo_url' => $faker->imageUrl(),
            'icon_url' => $faker->imageUrl(),
        ];
    }
}
