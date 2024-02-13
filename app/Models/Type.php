<?php

namespace App\Models;

use Database\Factories\TypeFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * App\Models\Type
 *
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read Collection<int, Category> $categories
 * @property-read int|null $categories_count
 * @property-read Collection<int, Datespot> $datespots
 * @property-read int|null $datespots_count
 * @property-read Collection<int, Subcategory> $subcategories
 * @property-read int|null $subcategories_count
 *
 * @method static TypeFactory factory($count = null, $state = [])
 * @method static Builder|Type newModelQuery()
 * @method static Builder|Type newQuery()
 * @method static Builder|Type onlyTrashed()
 * @method static Builder|Type query()
 * @method static Builder|Type whereCreatedAt($value)
 * @method static Builder|Type whereDeletedAt($value)
 * @method static Builder|Type whereId($value)
 * @method static Builder|Type whereName($value)
 * @method static Builder|Type whereUpdatedAt($value)
 * @method static Builder|Type withTrashed()
 * @method static Builder|Type withoutTrashed()
 *
 * @mixin Eloquent
 */
class Type extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['name'];

    public function datespots(): BelongsToMany
    {
        return $this->belongsToMany(Datespot::class, 'datespot_type')->withTrashed();
    }

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }

    public function subcategories(): HasManyThrough
    {
        return $this->hasManyThrough(Subcategory::class, Category::class, 'type_id', 'category_id');
    }

    protected static function boot(): void
    {
        parent::boot();

        static::deleting(function ($type) {
            $type->categories->each(function ($category) {
                $category->delete();

                $category->subcategories()->delete();
            });
        });

        static::restoring(function ($type) {
            $type->categories()->withTrashed()->restore();

            $type->categories()->withTrashed()->get()->each(function ($category) {
                $category->subcategories()->withTrashed()->restore();
            });
        });
    }
}
