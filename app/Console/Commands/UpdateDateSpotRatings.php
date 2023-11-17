<?php

namespace App\Console\Commands;

use App\Models\Datespot;
use Illuminate\Console\Command;

class UpdatedatespotRatings extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'app:update-datespot-ratings';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Recalculate and update average ratings for Date Spots';

	/**
	 * Execute the console command.
	 */
	public function handle(): void {
		Datespot::query()->update(['position' => null]); // Clear existing positions

		$datespots = Datespot::query()
			->withAvg('reviews', 'rating')
			->orderByDesc('reviews_avg_rating')
			->get();


		$position = 1;
		foreach ($datespots as $datespot) {
			$datespot->update(['position' => $position++]);
		}
		$this->info('Positions updated successfully.');
	}
}
