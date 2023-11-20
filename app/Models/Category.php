<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
	use HasFactory;
	use SoftDeletes;


	protected $appends = ['subcategories'];
	protected $fillable = ['name', 'type_id'];

	public function datespots(): BelongsToMany {
		return $this->belongsToMany(Datespot::class, 'datespot_category')->withTrashed();
	}

	public function type(): BelongsTo {
		return $this->belongsTo(Type::class)->withTrashed();
	}

	public function subCategories(): HasMany {
		return $this->hasMany(Subcategory::class)->withTrashed();
	}

	public function getSubCategoriesAttribute(): Collection {
		return $this->subCategories()->get();
	}

	protected static function boot() {
		parent::boot();

		static::deleting(function ($category) {
			$category->subcategories()->delete();
		});
	}

}
