<?php

namespace Feature\Controllers\Admin;

use App\Models\User;
use Database\Seeders\RolesTableSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminDashboardControllerTest extends TestCase
{
	use RefreshDatabase;

	protected function setUp(): void {
		parent::setUp();
		$this->seed(RolesTableSeeder::class);

		$this->superAdmin = User::factory()->superAdmin()->create();
		$this->admin = User::factory()->admin()->create();
		$this->company = User::factory()->company()->create();
		$this->regularUser = User::factory()->create();
	}

	/** @test */
	public function it_displays_admin_dashboard() {

		$this->actingAs($this->superAdmin);

		$this->withoutExceptionHandling();

		$response = $this->get(route('admin.dashboard'));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Dashboard/Index')
		);
	}


	/** @test */
	public function it_requires_authentication_for_admin_dashboard() {
		$response = $this->get(route('admin.dashboard'));

		$response->assertRedirect('/login');
	}
}
