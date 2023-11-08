<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DateSpot extends Model
{
    use HasFactory;

    protected $appends = ['rating', 'reviews_count', 'categories'];

    public function getReviewsCountAttribute()
    {

        return $this->reviews()->count();
    }

    public function getRatingAttribute(): int
    {
        $reviews = $this->reviews;

        if ($reviews->isEmpty()) {
            return 0;
        }

        $totalRating = $reviews->sum('rating');
        $averageRating = $totalRating / $reviews->count();

        return round($averageRating);
    }

    public function getCategoriesAttribute(){

        return $this->categories()->get();
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
