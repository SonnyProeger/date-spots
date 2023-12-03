<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;
use Znck\Eloquent\Traits\BelongsToThrough;

/**
 * App\Models\Subcategory
 *
 * @property int $id
 * @property int $category_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Category $category
 * @method static \Database\Factories\SubcategoryFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Subcategory withoutTrashed()
 * @mixin \Eloquent
 */
class Subcategory extends Model
{
	use hasFactory;
	use SoftDeletes;
	use BelongsToThrough;
	use HasRelationships;


	protected $fillable = ['name', 'category_id'];


	public function category(): BelongsTo {
		return $this->belongsTo(Category::class);
	}

//	public function datespots(): HasManyDeep {
//		return $this->hasManyDeep(Datespot::class,
//			['datespot_type', Type::class, Category::class]);
//	}
}