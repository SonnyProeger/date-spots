<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Type
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Datespot> $datespots
 * @property-read int|null $datespots_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Subcategory> $subcategories
 * @property-read int|null $subcategories_count
 * @method static \Database\Factories\TypeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Type newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Type newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Type onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Type query()
 * @method static \Illuminate\Database\Eloquent\Builder|Type whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Type whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Type whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Type whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Type whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Type withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Type withoutTrashed()
 * @mixin \Eloquent
 */
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
