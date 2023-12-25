<?php

namespace Feature\Controllers\Admin;

use App\Models\Datespot;
use App\Models\User;
use Tests\TestCase;

class DatespotMediaControllerTest extends TestCase
{

	public function test_super_admin_can_view_any_media(): void {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);
		$datespot = Datespot::factory()->create();

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Media/Index')
			->has('datespot')
			->has('media')
		);
	}

	public function test_admin_can_view_any_media(): void {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);
		$datespot = Datespot::factory()->create();
		$media = $datespot->getMedia();

		$response = $this->get(route('media.index', [$datespot, $media]));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Media/Index')
			->has('datespot')
			->has('media')
		);
	}

	public function test_company_can_view_media_of_own_datespots(): void {
		$company = User::factory()->company()->create();
		$this->actingAs($company);
		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Media/Index')
			->has('datespot')
			->has('media')
		);
	}

	public function test_company_cannot_view_media_of_other_datespots(): void {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create();
		$media = $datespot->getMedia();

		$response = $this->get(route('media.index', [$datespot, $media]));

		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_view_any_media(): void {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);
		$datespot = Datespot::factory()->create();

		$response = $this->get(route('media.index', $datespot));

		$response->assertStatus(403);
	}
}
