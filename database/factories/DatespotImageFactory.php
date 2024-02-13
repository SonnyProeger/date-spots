<?php

namespace Database\Factories;

use App\Models\DatespotImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<DatespotImage>
 */
class DatespotImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = DatespotImage::class;

    public function definition(): array
    {
        return [
            'url' => 'https://placehold.co/600x400',
        ];
    }
}
