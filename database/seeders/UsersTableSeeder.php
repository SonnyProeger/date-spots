<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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

		User::factory()->create([
			'name' => 'admin',
			'email' => 'admin@example.com',
			'password' => Hash::make('password'),
			'role_id' => Role::firstOrCreate(['name' => 'SuperAdmin'])->id,
		]);

		// Create additional random users
		$randomUsersCount = 15;
		User::factory($randomUsersCount)->create();


	}
}
