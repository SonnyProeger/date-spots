<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Type extends Model
{
	use HasFactory;

	protected $appends = ['categories'];

	public function places(): BelongsToMany
	{
		return $this->belongsToMany(DateSpot::class, 'date_spot_type');
	}

	public function categories(): HasMany
	{
		return $this->hasMany(Category::class);
	}

	public function getCategoriesAttribute(): Collection
	{

		return $this->categories()->get();
	}


}
