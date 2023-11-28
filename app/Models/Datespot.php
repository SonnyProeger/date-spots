<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Datespot extends Model
{
	use HasFactory;
	use SoftDeletes;

	protected $fillable = [
		'datespot_id',
		'name',
		'tagline',
		'lat',
		'lng',
		'street_name',
		'house_number',
		'postal_code',
		'city',
		'province',
		'country',
		'phone_number',
		'business_status',
		'website',
		'email',
		'open_now',
		'icon_url',
		'position',
	];


	public function images(): HasMany {
		return $this->hasMany(DatespotImage::class);
	}

	public function reviews(): HasMany {
		return $this->hasMany(Review::class);
	}

	public function categories(): BelongsToMany {
		return $this->belongsToMany(Category::class, 'datespot_category');
	}

	public function subCategories(): BelongsToMany {
		return $this->belongsToMany(Subcategory::class, 'datespot_subcategory');
	}

	public function types(): BelongsToMany {
		return $this->belongsToMany(Type::class, 'datespot_type');
	}

	public function user(): BelongsTo {
		return $this->belongsTo(User::class);
	}
}
