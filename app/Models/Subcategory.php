<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subcategory extends Model
{
	use hasFactory;

	public function places(): BelongsToMany {
		return $this->belongsToMany(Datespot::class, 'datespot_subcategory');
	}

	public function category() {
		return $this->belongsTo(Category::class);
	}

}