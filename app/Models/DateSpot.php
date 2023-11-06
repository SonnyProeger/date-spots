<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DateSpot extends Model
{
    use HasFactory;


    public function getReviewsCountAttribute()
    {

        return $this->reviews()->count();
    }


    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'date_spot_category');
    }

    public function types()
    {
        return $this->belongsToMany(Type::class, 'date_spot_type');
    }
}
