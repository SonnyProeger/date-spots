<?php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Role>
 */
class RoleFactory extends Factory
{
	protected $model = Role::class;

	public function definition(): array {
		return [
			'name' => $this->faker->unique()->randomElement(['SuperAdmin', 'Admin', 'Company', 'User']),
		];
	}

	public function superAdmin(): static {
		return $this->state(function (array $attributes) {
			return [
				'name' => 'SuperAdmin',
			];
		});
	}

	public function admin(): static {
		return $this->state(function (array $attributes) {
			return [
				'name' => 'Admin',
			];
		});
	}

	public function company(): static {
		return $this->state(function (array $attributes) {
			return [
				'name' => 'Company',
			];
		});
	}

	public function user(): static {
		return $this->state(function (array $attributes) {
			return [
				'name' => 'User',
			];
		});
	}
}
