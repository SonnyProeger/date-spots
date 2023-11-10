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

    public function getRatingAttribute(): string
    {
        $reviews = $this->reviews;

        if ($reviews->isEmpty()) {
            return '0.0';
        }

        $totalRating = $reviews->sum('rating');
        $averageRating = $totalRating / $reviews->count();

        $roundedRating = round($averageRating * 2) / 2;
        $formattedRating = number_format($roundedRating, 1); // Ensure one decimal place.

        return min($formattedRating, '5.0');
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
