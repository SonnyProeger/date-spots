<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subcategory extends Model
{
	use hasFactory;
	use SoftDeletes;

	protected $fillable = ['name', 'category_id'];

	public function datespots(): BelongsToMany {
		return $this->belongsToMany(Datespot::class, 'datespot_subcategory');
	}

	public function category() {
		return $this->belongsTo(Category::class);
	}

}