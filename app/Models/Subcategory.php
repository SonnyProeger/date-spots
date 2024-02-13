<?php

namespace App\Models;

use Database\Factories\SubcategoryFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;
use Znck\Eloquent\Traits\BelongsToThrough;

/**
 * App\Models\Subcategory
 *
 * @property int $id
 * @property int $category_id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read Category $category
 *
 * @method static SubcategoryFactory factory($count = null, $state = [])
 * @method static Builder|Subcategory newModelQuery()
 * @method static Builder|Subcategory newQuery()
 * @method static Builder|Subcategory onlyTrashed()
 * @method static Builder|Subcategory query()
 * @method static Builder|Subcategory whereCategoryId($value)
 * @method static Builder|Subcategory whereCreatedAt($value)
 * @method static Builder|Subcategory whereDeletedAt($value)
 * @method static Builder|Subcategory whereId($value)
 * @method static Builder|Subcategory whereName($value)
 * @method static Builder|Subcategory whereUpdatedAt($value)
 * @method static Builder|Subcategory withTrashed()
 * @method static Builder|Subcategory withoutTrashed()
 *
 * @mixin Eloquent
 */
class Subcategory extends Model
{
    use BelongsToThrough;
    use hasFactory;
    use HasRelationships;
    use SoftDeletes;

    protected $fillable = ['name', 'category_id'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    //	public function datespots(): HasManyDeep {
    //		return $this->hasManyDeep(Datespot::class,
    //			['datespot_type', Type::class, Category::class]);
    //	}
}
