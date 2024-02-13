<?php

namespace Database\Factories;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'two_factor_secret' => null,
            'two_factor_recovery_codes' => null,
            'remember_token' => Str::random(10),
            'profile_photo_path' => null,
            'role_id' => function () {
                return Role::inRandomOrder()->firstOrCreate(['name' => 'User'])->id;
            },
        ];
    }

    public function unverified(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }

    public function superAdmin(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'role_id' => Role::firstOrCreate(['name' => 'SuperAdmin'])->id,
            ];
        });
    }

    public function admin(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'role_id' => Role::firstOrCreate(['name' => 'Admin'])->id,
            ];
        });
    }

    public function company(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'role_id' => Role::firstOrCreate(['name' => 'Company'])->id,
            ];
        });
    }

    public function user(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'role_id' => Role::firstOrCreate(['name' => 'User'])->id,
            ];
        });
    }
}
