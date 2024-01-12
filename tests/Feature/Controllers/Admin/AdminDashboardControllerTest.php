<?php

namespace Tests\Feature\Controllers\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminDashboardControllerTest extends TestCase
{
	use RefreshDatabase;

	/** @test */
	public function it_displays_admin_dashboard() {
		$superAdmin = User::factory()->superAdmin()->make();

		$this->actingAs($superAdmin);

		$this->withoutExceptionHandling();

		$response = $this->get(route('admin.dashboard'));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Dashboard/Index')
		);
	}


	/** @test */
	public function it_requires_authentication_for_admin_dashboard() {
		$response = $this->get(route('admin.dashboard'));

		$response->assertRedirect('/login');
	}
}
