<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Type extends Model
{
	use HasFactory;
	use SoftDeletes;


	protected $appends = ['categories'];

	protected $fillable = ['name'];

	public function datespots(): BelongsToMany {
		return $this->belongsToMany(Datespot::class, 'datespot_type');
	}

	public function categories(): HasMany {
		return $this->hasMany(Category::class);
	}

	public function getCategoriesAttribute(): Collection {

		return $this->categories()->get();
	}


}
