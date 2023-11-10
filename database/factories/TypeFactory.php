<?php

namespace Database\Factories;

use App\Models\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Type>
 */
class TypeFactory extends Factory
{
    protected $model = Type::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $types = [
            'food','activities','entertainment','outdoor','special occasions',
        ];

        $randomType = $this->faker->randomElement($types);

        return [
            'name' => $randomType,
        ];
    }
}
