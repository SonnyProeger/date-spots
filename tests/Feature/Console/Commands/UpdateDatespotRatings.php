<?php

namespace Tests\Feature\Console\Commands;

use App\Models\Datespot;
use App\Models\Review;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class UpdateDatespotRatings extends TestCase
{
	use RefreshDatabase;

	/** @test */
	public function it_updates_datespot_ratings_and_positions() {
		$user = User::factory()->user()->create();
		$user2 = User::factory()->user()->create();

		$datespot1 = Datespot::factory()->create(['city' => 'New York']);
		$datespot2 = Datespot::factory()->create(['city' => 'New York']);
		$datespot3 = Datespot::factory()->create(['city' => 'Los Angeles']);

		Review::factory()->create([
			'user_id' => $user->id,
			'datespot_id' => $datespot1->id,
			'rating' => 4,
		]);
		Review::factory()->create([
			'user_id' => $user2->id,
			'datespot_id' => $datespot2->id,
			'rating' => 3
		]);
		Review::factory()->create([
			'user_id' => $user->id,
			'datespot_id' => $datespot3->id,
			'rating' => 2
		]);

		Artisan::call('app:update-datespot-ratings');

		$this->assertEquals(1, Datespot::where('id', $datespot1->id)->first()->position);
		$this->assertEquals(2, Datespot::where('id', $datespot2->id)->first()->position);
		$this->assertEquals(1, Datespot::where('id', $datespot3->id)->first()->position);
	}
}
