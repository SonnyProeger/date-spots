<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
	public function run(): void {
		Role::create(['name' => 'SuperAdmin']);
		Role::create(['name' => 'Admin']);
		Role::create(['name' => 'Company']);
		Role::create(['name' => 'User']);
	}
}
