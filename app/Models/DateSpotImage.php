<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DateSpotImage extends Model
{
	use HasFactory;

	protected $fillable = ['url'];

	public function dateSpot(): BelongsTo
	{
		return $this->belongsTo(DateSpot::class);
	}
}
