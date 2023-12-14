<?php

namespace Feature\Controllers\Admin;

use App\Models\Datespot;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class AdminDatespotControllerTest extends TestCase
{

	use DatabaseMigrations;

	protected function setUp(): void {
		parent::setUp();

		Role::create(['name' => 'SuperAdmin']);
		Role::create(['name' => 'Admin']);
		Role::create(['name' => 'Company']);
		Role::create(['name' => 'User']);
	}

	// SuperAdmin
	public function test_super_admin_can_view_datespots_index() {
		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$response = $this->get(route('datespots.index'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Datespots/Index')
			->has('datespots')
		);
	}

	public function test_super_admin_can_view_create() {
		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$response = $this->get(route('datespots.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Datespots/Create')
		);
	}

	public function test_super_admin_can_store_datespot() {
		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$datespotData = Datespot::factory()->make()->toArray();

		$response = $this->post(route('datespots.store'), $datespotData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('datespots', $datespotData);

		$response->assertRedirect(route('datespots.index'))
			->assertSessionHas('success', 'Datespot created.');
	}

	public function test_super_admin_can_view_datespot_detail() {
		$datespot = Datespot::factory()->create();

		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$response = $this->get(route('datespots.edit', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Datespots/Edit')
			->has('datespot')
		);
	}

	public function test_super_admin_can_update_datespot() {
		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$datespot = Datespot::factory()->create();

		$updatedData = [
			'name' => 'Updated Name',
			'email' => 'updated@example.com',
			'phone_number' => '1234567890',
			'street_name' => 'Updated Street',
			'house_number' => 123,
			'city' => 'Updated City',
			'province' => 'Updated Province',
			'postal_code' => '12345',
			'website' => 'https://updatedwebsite.com',
			'lat' => 12.345,
			'lng' => 67.890,
		];

		$response = $this
			->from(route('datespots.edit', $datespot))
			->put(route('datespots.update', $datespot), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('datespots', $updatedData);

		$response->assertRedirect(route('datespots.edit', $datespot))
			->assertSessionHas('success', 'Datespot updated.');
	}

	public function test_super_admin_can_destroy_datespot() {
		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$datespot = Datespot::factory()->create();

		$response = $this->delete(route('datespots.destroy', $datespot));

		$this->assertSoftDeleted('datespots', $datespot->toArray());

		$response->assertRedirect(route('datespots.index'))
			->assertSessionHas('success', "$datespot->name deleted.");
	}

	public function test_super_admin_can_restore_datespot() {
		$superAdmin = User::factory()->superAdmin()->create();
		$this->actingAs($superAdmin);

		$datespot = Datespot::factory()->create();
		$datespot->delete();

		$response = $this->put(route('datespots.restore', $datespot));

		$this->assertDatabaseHas('datespots', ['id' => $datespot->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Datespot restored.');
	}


	// Admin
	public function test_admin_can_view_index() {
		$admin = User::factory()->admin()->create();
		$this->actingAs($admin);

		$response = $this->get('/admin/datespots');
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Datespots/Index')
			->has('datespots')
		);
	}

	public function test_admin_can_view_create() {
		$admin = User::factory()->admin()->create();
		$this->actingAs($admin);

		$response = $this->get(route('datespots.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Datespots/Create')
		);
	}

	public function test_admin_can_store_datespot() {
		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		$datespotData = Datespot::factory()->make()->toArray();

		$response = $this->post(route('datespots.store'), $datespotData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('datespots', [
			'name' => $datespotData['name'],
		]);

		$response->assertRedirect(route('datespots.index'))
			->assertSessionHas('success', 'Datespot created.');
	}

	public function test_admin_can_view_datespot_detail() {
		$datespot = Datespot::factory()->create();

		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		$response = $this->get(route('datespots.edit', $datespot));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Datespots/Edit')
			->has('datespot')
		);
	}

	public function test_admin_can_update_datespot() {
		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		$datespot = Datespot::factory()->create();

		$updatedData = [
			'name' => 'Updated Name',
			'email' => 'updated@example.com',
			'phone_number' => '1234567890',
			'street_name' => 'Updated Street',
			'house_number' => 123,
			'city' => 'Updated City',
			'province' => 'Updated Province',
			'postal_code' => '12345',
			'website' => 'https://updatedwebsite.com',
			'lat' => 12.345,
			'lng' => 67.890,
		];

		$response = $this
			->from(route('datespots.edit', $datespot))
			->put(route('datespots.update', $datespot), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('datespots', $updatedData);

		$response->assertRedirect(route('datespots.edit', $datespot))
			->assertSessionHas('success', 'Datespot updated.');
	}

	public function test_admin_can_destroy_datespot() {
		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		$datespot = Datespot::factory()->create();

		$response = $this->delete(route('datespots.destroy', $datespot));

		$this->assertSoftDeleted('datespots', $datespot->toArray());

		$response->assertRedirect(route('datespots.index'))
			->assertSessionHas('success', "$datespot->name deleted.");
	}

	public function test_admin_can_restore_datespot() {
		$admin = User::factory()->superAdmin()->create();
		$this->actingAs($admin);

		$datespot = Datespot::factory()->create();
		$datespot->delete();

		$response = $this->put(route('datespots.restore', $datespot));

		$this->assertDatabaseHas('datespots', ['id' => $datespot->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Datespot restored.');
	}


	//Company
	public function test_company_can_view_their_own_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$companyDatespot = Datespot::factory()->create(['user_id' => $company->id]);
		$this->seed('Database\Seeders\TypesTableSeeder');

		$response = $this->get(route('datespots.index'));

		$response->assertStatus(200);

		$response->assertInertia(function ($assert) use ($companyDatespot) {
			$assert->component('Admin/Pages/Datespots/Index')
				->has('datespots.data', 1)
				->has('datespots.data.0', function ($datespot) use ($companyDatespot) {
					$datespot->where('id', $companyDatespot->id)
						->where('name', $companyDatespot->name)
						->where('city', $companyDatespot->city)
						->where('type', $companyDatespot->types->first()->name)
						->where('deleted_at', $companyDatespot->deleted_at);
				});
		});
	}

	public function test_company_cannot_view_datespot_create() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$response = $this->get(route('datespots.create'));
		$response->assertStatus(403);
	}

	public function test_company_cannot_store_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespotData = Datespot::factory()->make()->toArray();

		$response = $this->post(route('datespots.store'), $datespotData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('datespots', $datespotData);
	}

	public function test_company_cannot_view_datespot_detail_of_others() {
		$datespot = Datespot::factory()->create();

		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$response = $this->get(route('datespots.edit', $datespot));

		$response->assertStatus(403);
	}

	public function test_company_can_update_their_own_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create(['user_id' => $company->id]);

		$updatedData = [
			'name' => 'Updated Name',
			'email' => 'updated@example.com',
			'phone_number' => '1234567890',
			'street_name' => 'Updated Street',
			'house_number' => 123,
			'city' => 'Updated City',
			'province' => 'Updated Province',
			'postal_code' => '12345',
			'website' => 'https://updatedwebsite.com',
			'lat' => 12.345,
			'lng' => 67.890,
		];

		$response = $this
			->from(route('datespots.edit', $datespot))
			->put(route('datespots.update', $datespot), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('datespots', $updatedData);

		$response->assertRedirect(route('datespots.edit', $datespot))
			->assertSessionHas('success', 'Datespot updated.');
	}


	public function test_company_cannot_update_datespot_of_others() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create();

		$updatedData = [
			'name' => 'Updated Name',
			'email' => 'updated@example.com',
			'phone_number' => '1234567890',
			'street_name' => 'Updated Street',
			'house_number' => 123,
			'city' => 'Updated City',
			'province' => 'Updated Province',
			'postal_code' => '12345',
			'website' => 'https://updatedwebsite.com',
			'lat' => 12.345,
			'lng' => 67.890,
		];

		$response = $this
			->from(route('datespots.edit', $datespot))
			->put(route('datespots.update', $datespot), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('datespots', $updatedData);
	}

	public function test_company_cannot_destroy_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create();

		$response = $this->delete(route('datespots.destroy', $datespot));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('datespots', $datespot->toArray());

	}

	public function test_company_cannot_restore_datespot() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$datespot = Datespot::factory()->create();
		$datespot->delete();

		$response = $this->put(route('datespots.restore', $datespot));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('datespots', ['id' => $datespot->id, 'deleted_at' => null]);
	}

	//User
	public function test_regular_user_cannot_view_datespot_index() {
		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$response = $this->get(route('datespots.index'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_view_datespot_create() {
		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$response = $this->get(route('datespots.create'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_store_datespot() {
		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$datespotData = Datespot::factory()->make()->toArray();

		$response = $this->post(route('datespots.store'), $datespotData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('datespots', $datespotData);
	}

	public function test_regular_user_cannot_view_datespot_detail() {
		$datespot = Datespot::factory()->create();

		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$response = $this->get(route('datespots.edit', $datespot));

		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_update_datespot() {
		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$datespot = Datespot::factory()->create();

		$updatedData = [
			'name' => 'Updated Name',
			'email' => 'updated@example.com',
			'phone_number' => '1234567890',
			'street_name' => 'Updated Street',
			'house_number' => 123,
			'city' => 'Updated City',
			'province' => 'Updated Province',
			'postal_code' => '12345',
			'website' => 'https://updatedwebsite.com',
			'lat' => 12.345,
			'lng' => 67.890,
		];

		$response = $this
			->from(route('datespots.edit', $datespot))
			->put(route('datespots.update', $datespot), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('datespots', $updatedData);
	}

	public function test_regular_user_cannot_destroy_datespot() {
		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$datespot = Datespot::factory()->create();

		$response = $this->delete(route('datespots.destroy', $datespot));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('datespots', $datespot->toArray());

	}

	public function test_regular_user_cannot_restore_datespot() {
		$regularUser = User::factory()->user()->create();
		$this->actingAs($regularUser);

		$datespot = Datespot::factory()->create();
		$datespot->delete();

		$response = $this->put(route('datespots.restore', $datespot));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('datespots', ['id' => $datespot->id, 'deleted_at' => null]);
	}
}

