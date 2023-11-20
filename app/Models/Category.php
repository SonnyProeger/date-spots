<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
	use HasFactory;
	use SoftDeletes;


	protected $appends = ['subcategories'];
	protected $fillable = ['name'];

	public function places(): BelongsToMany {
		return $this->belongsToMany(Datespot::class, 'datespot_category');
	}

	// Category.php

	public function subCategories(): HasMany {
		return $this->hasMany(Subcategory::class);
	}

	public function getSubCategoriesAttribute(): Collection {
		return $this->subCategories()->get();
	}

}
