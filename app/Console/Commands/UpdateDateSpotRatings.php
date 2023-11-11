<?php

namespace App\Console\Commands;

use App\Models\DateSpot;
use Illuminate\Console\Command;

class UpdateDateSpotRatings extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'app:update-date-spot-ratings';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Recalculate and update average ratings for Date Spots';

	/**
	 * Execute the console command.
	 */
	public function handle(): void
	{
		DateSpot::query()->update(['position' => null]); // Clear existing positions

		$dateSpots = DateSpot::query()
			->withAvg('reviews', 'rating')
			->orderByDesc('reviews_avg_rating')
			->get();


		$position = 1;
		foreach ($dateSpots as $dateSpot) {
			$dateSpot->update(['position' => $position++]);
		}
		$this->info('Positions updated successfully.');
	}
}
