<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            'food',
            'outdoor',
            'entertainment',
            'activities',
            'special occasions',
            'restaurant',
            'cafe',
            'coffee shops',
            'take-out',
            'delivery',
            'parks',
            'nature',
            'beaches',
            'waterfront',
            'hiking',
            'adventure',
            'botanical gardens',
            'picnic spots',
            'movie theaters',
            'live music',
            'concerts',
            'art galleries',
            'museums',
            'comedy clubs',
            'arcades',
            'gaming',
            'spa',
            'wellness',
            'cooking classes',
            'dance classes',
            'escape rooms',
            'anniversary',
            'birthday celebrations',
            'engagement locations',
            'wedding venues',
            'family gatherings',
        ];


        $randomCategory = $this->faker->randomElement($categories);

        return [
            'name' => $randomCategory,
        ];
    }
}
