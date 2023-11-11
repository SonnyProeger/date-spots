<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DateSpot extends Model
{
	use HasFactory;

	protected $appends = ['rating', 'reviews_count', 'categories', 'images'];

	public function getReviewsCountAttribute(): int
	{

		return $this->reviews()->count();
	}

	public function getRatingAttribute(): string
	{
		$reviews = $this->reviews;

		if ($reviews->isEmpty()) {
			return '0.0';
		}

		$totalRating = $reviews->sum('rating');
		$averageRating = $totalRating / $reviews->count();

		$roundedRating = round($averageRating * 2) / 2;
		$formattedRating = number_format($roundedRating, 1); // Ensure one decimal place.

		return min($formattedRating, '5.0');
	}


	public function getCategoriesAttribute(): Collection
	{

		return $this->categories()->get();
	}

	public function getImagesAttribute(): Collection
	{

		return $this->images()->get();
	}

	public function images(): HasMany
	{
		return $this->hasMany(DateSpotImage::class);
	}

	public function reviews(): HasMany
	{
		return $this->hasMany(Review::class);
	}

	public function categories(): BelongsToMany
	{
		return $this->belongsToMany(Category::class, 'date_spot_category');
	}

	public function types(): BelongsToMany
	{
		return $this->belongsToMany(Type::class, 'date_spot_type');
	}
}
