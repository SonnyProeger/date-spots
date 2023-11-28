<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;

class Type extends Model
{
	use HasFactory;
	use SoftDeletes;


	protected $fillable = ['name'];

	public function datespots(): BelongsToMany {
		return $this->belongsToMany(Datespot::class, 'datespot_type')->withTrashed();
	}


	public function categories(): HasMany {
		return $this->hasMany(Category::class);
	}

	public function subcategories(): HasManyThrough {
		return $this->hasManyThrough(Subcategory::class, Category::class, 'type_id', 'category_id');
	}

	protected static function boot() {
		parent::boot();

		static::deleting(function ($type) {
			$type->categories->each->subcategories->each->delete();
			$type->categories()->delete();
		});

		static::restoring(function ($type) {
			$type->categories()->withTrashed()->restore();

			$type->categories->each(function ($category) {
				$category->subcategories()->withTrashed()->restore();
			});

		});

	}


}
