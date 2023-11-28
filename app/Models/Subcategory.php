<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;
use Znck\Eloquent\Traits\BelongsToThrough;

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