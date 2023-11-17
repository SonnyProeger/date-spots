<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DatespotImage extends Model
{
	use HasFactory;

	protected $fillable = ['url'];

	public function datespot(): BelongsTo {
		return $this->belongsTo(Datespot::class);
	}
}
