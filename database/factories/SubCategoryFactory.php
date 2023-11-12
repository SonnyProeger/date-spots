<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SubCategory>
 */
class SubCategoryFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		$specificSubcategoriesByCategory = [
			'restaurant' => ['Italian', 'Asian', 'Fine Dining'],
			'cafe' => ['Coffee Shop', 'Dessert Cafe'],
			'coffee shops' => ['Coffee Shop'],
			'nature' => ['Picnic in the park', 'Botanical gardens', 'Hiking trails'],
			'beaches' => ['Beach picnic', 'Water sports'],
			'waterfront' => ['Waterfront dining', 'Boat ride'],
			'hiking' => ['Scenic trails', 'Mountain hiking'],
			'adventure' => ['Zip-lining', 'Adventure parks'],
			'botanical gardens' => ['Botanical tour', 'Plant observation'],
			'picnic spots' => ['Picnic in the park', 'Scenic spots'],
			'movie theaters' => ['Blockbuster movies', 'Indie films'],
			'live music' => ['Concerts', 'Live bands'],
			'concerts' => ['Music festivals', 'Live performances'],
			'art galleries' => ['Contemporary art', 'Local artists\' exhibitions'],
			'museums' => ['History museums', 'Science exhibits'],
			'comedy clubs' => ['Stand-up comedy shows', 'Improv nights'],
			'arcades' => ['Retro arcades', 'Modern gaming centers'],
			'spa' => ['Spa day', 'Relaxing massage'],
			'wellness' => ['Wellness retreats', 'Mindfulness classes'],
			'cooking classes' => ['Culinary workshops', 'Chef-led classes'],
			'dance classes' => ['Dance lessons', 'Partner dance classes'],
			'escape rooms' => ['Adventure escape rooms', 'Mystery puzzles'],
			'anniversary' => ['Romantic dinner', 'Getaway'],
			'birthday celebrations' => ['Party venues', 'Activity-based celebrations'],
			'engagement locations' => ['Romantic locations', 'Scenic spots'],
			'wedding venues' => ['Elegant venues', 'Outdoor settings'],
			'family gatherings' => ['Family-friendly activities', 'Home celebrations'],
		];

		$randomCategory = Category::inRandomOrder()->first();
		$randomSubcategory = $this->faker->randomElement($specificSubcategoriesByCategory[$randomCategory->name]);

		return [
			'category_id' => $randomCategory->id,
			'name' => $randomSubcategory,
		];
	}
}
