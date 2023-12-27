<?php

namespace Feature\Controllers\Admin;

use App\Models\Type;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TypeControllerTest extends TestCase
{
	use RefreshDatabase;

	// SuperAdmin
	public function test_super_admin_can_view_types_index() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();

		$response = $this->get(route('types.index'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Types/Index')
			->has('types.data', 1)
			->has('types.data.0', function ($type) {
				$type->has('id')
					->has('name')
					->has('deleted_at');
			})
		);
	}

	public function test_super_admin_can_view_make() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$response = $this->get(route('types.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Types/Create')
		);
	}

	public function test_super_admin_can_store_type() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();
		$typeData = Type::factory()->make(['name' => 'tester'])->toArray();

		$response = $this->post(route('types.store'), $typeData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('types', $typeData);

		$response->assertRedirect(route('types.index'))
			->assertSessionHas('success', 'Type created.');
	}

	public function test_super_admin_can_view_type_detail() {
		$type = Type::factory()->create();

		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$response = $this->get(route('types.edit', $type));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Types/Edit')
			->has('type')
		);
	}

	public function test_super_admin_can_update_type() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$type = Type::factory()->create();

		$updatedData = [
			'id' => $type->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('types.edit', $type))
			->put(route('types.update', $type), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('types', $updatedData);

		$response->assertRedirect(route('types.edit', $type))
			->assertSessionHas('success', 'Type updated.');
	}

	public function test_super_admin_can_destroy_type() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$type = Type::factory()->create();

		$response = $this->delete(route('types.destroy', $type));

		$this->assertSoftDeleted('types', $type->toArray());

		$response->assertRedirect(route('types.index'))
			->assertSessionHas('success', "$type->name deleted.");
	}

	public function test_super_admin_can_restore_type() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$type = Type::factory()->create();
		$type->delete();

		$response = $this->put(route('types.restore', $type));

		$this->assertDatabaseHas('types', ['id' => $type->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Type restored.');
	}


	// Admin
	public function test_admin_can_view_index() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		Type::factory()->create();

		$response = $this->get('/admin/types');
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Types/Index')
			->has('types.data')
			->has('types.data.0', function ($type) {
				$type->has('id')
					->has('name')
					->has('deleted_at');
			})
		);
	}

	public function test_admin_can_view_make() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		$response = $this->get(route('types.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Types/Create')
		);
	}

	public function test_admin_can_store_type() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		Type::factory()->create();
		$typeData = Type::factory()->make(['name' => 'tester'])->toArray();

		$response = $this->post(route('types.store'), $typeData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('types', [
			'name' => $typeData['name'],
		]);

		$response->assertRedirect(route('types.index'))
			->assertSessionHas('success', 'Type created.');
	}

	public function test_admin_can_view_type_detail() {
		$type = Type::factory()->create();

		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		$response = $this->get(route('types.edit', $type));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Pages/Types/Edit')
			->has('type')
		);
	}

	public function test_admin_can_update_type() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		$type = Type::factory()->create();

		$updatedData = [
			'id' => $type->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('types.edit', $type))
			->put(route('types.update', $type), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('types', $updatedData);

		$response->assertRedirect(route('types.edit', $type))
			->assertSessionHas('success', 'Type updated.');
	}

	public function test_admin_can_destroy_type() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		$type = Type::factory()->create();

		$response = $this->delete(route('types.destroy', $type));

		$this->assertSoftDeleted('types', $type->toArray());

		$response->assertRedirect(route('types.index'))
			->assertSessionHas('success', "$type->name deleted.");
	}

	public function test_admin_can_restore_type() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		$type = Type::factory()->create();
		$type->delete();

		$response = $this->put(route('types.restore', $type));

		$this->assertDatabaseHas('types', ['id' => $type->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Type restored.');
	}


	//Company
	public function test_company_cannot_view_types_index() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$response = $this->get(route('types.index'));

		$response->assertStatus(403);
	}

	public function test_company_cannot_view_type_make() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$response = $this->get(route('types.create'));
		$response->assertStatus(403);
	}

	public function test_company_cannot_store_type() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		Type::factory()->create();
		$typeData = Type::factory()->make(['name' => 'tester'])->toArray();

		$response = $this->post(route('types.store'), $typeData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('types', $typeData);
	}

	public function test_company_cannot_view_type_detail_of_others() {
		$type = Type::factory()->create();

		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$response = $this->get(route('types.edit', $type));

		$response->assertStatus(403);
	}


	public function test_company_cannot_update_types() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$type = Type::factory()->create();

		$updatedData = [
			'id' => $type->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('types.edit', $type))
			->put(route('types.update', $type), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('types', $updatedData);
	}

	public function test_company_cannot_destroy_type() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$type = Type::factory()->create();

		$response = $this->delete(route('types.destroy', $type));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('types', $type->toArray());
	}

	public function test_company_cannot_restore_type() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$type = Type::factory()->create();
		$type->delete();

		$response = $this->put(route('types.restore', $type));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('types', ['id' => $type->id, 'deleted_at' => null]);
	}

	//User
	public function test_regular_user_cannot_view_type_index() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('types.index'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_view_type_make() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('types.create'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_store_type() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		Type::factory()->create();
		$typeData = Type::factory()->make(['name' => 'tester'])->toArray();

		$response = $this->post(route('types.store'), $typeData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('types', $typeData);
	}

	public function test_regular_user_cannot_view_type_detail() {
		$type = Type::factory()->create();

		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('types.edit', $type));

		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_update_type() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$type = Type::factory()->create();

		$updatedData = [
			'id' => $type->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('types.edit', $type))
			->put(route('types.update', $type), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('types', $updatedData);
	}

	public function test_regular_user_cannot_destroy_type() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$type = Type::factory()->create();

		$response = $this->delete(route('types.destroy', $type));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('types', $type->toArray());

	}

	public function test_regular_user_cannot_restore_type() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$type = Type::factory()->create();
		$type->delete();

		$response = $this->put(route('types.restore', $type));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('types', ['id' => $type->id, 'deleted_at' => null]);
	}
}
