<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		// Create users for each role
		$roles = Role::all();

		foreach ($roles as $role) {
			User::factory()->create(['role_id' => $role->id]);
		}

		// Create additional random users (if needed)
		$randomUsersCount = 15; // Adjust this count based on the total desired users
		User::factory($randomUsersCount)->create();
	}
}
