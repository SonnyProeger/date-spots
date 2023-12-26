<?php

namespace App\Models;

use Database\Factories\CategoryFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Znck\Eloquent\Traits\BelongsToThrough;

/**
 * App\Models\Category
 *
 * @property int $id
 * @property int $type_id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read Collection<int, Subcategory> $subCategories
 * @property-read int|null $sub_categories_count
 * @property-read Type $type
 * @method static CategoryFactory factory($count = null, $state = [])
 * @method static Builder|Category newModelQuery()
 * @method static Builder|Category newQuery()
 * @method static Builder|Category onlyTrashed()
 * @method static Builder|Category query()
 * @method static Builder|Category whereCreatedAt($value)
 * @method static Builder|Category whereDeletedAt($value)
 * @method static Builder|Category whereId($value)
 * @method static Builder|Category whereName($value)
 * @method static Builder|Category whereTypeId($value)
 * @method static Builder|Category whereUpdatedAt($value)
 * @method static Builder|Category withTrashed()
 * @method static Builder|Category withoutTrashed()
 * @mixin Eloquent
 */
class Category extends Model
{
	use HasFactory;
	use SoftDeletes;
	use BelongsToThrough;


	protected $fillable = ['name', 'type_id'];


	public function type(): BelongsTo {
		return $this->belongsTo(Type::class)->withTrashed();
	}

	public function subCategories(): HasMany {
		return $this->hasMany(Subcategory::class)->withTrashed();
	}

	public function datespot(): \Znck\Eloquent\Relations\BelongsToThrough {
		return $this->belongsToThrough(Datespot::class, Type::class);
	}

	protected static function boot() {
		parent::boot();

		static::deleting(function ($category) {
			$category->subcategories()->delete();
		});

		static::restoring(function ($category) {
			$category->subcategories()->restore();
		});
	}

}
