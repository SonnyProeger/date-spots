<?php

namespace Tests\Feature\Controllers\Admin;

use App\Models\Category;
use App\Models\Subcategory;
use App\Models\Type;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SubcategoryControllerTest extends TestCase
{
	use RefreshDatabase;

	// SuperAdmin
	public function test_super_admin_can_view_subcategories_index() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();
		Category::factory()->create();
		Subcategory::factory()->create();

		$response = $this->get(route('subcategories.index'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Subcategories/Index')
			->has('subcategories.data', 1)
			->has('subcategories.data.0', function ($subcategory) {
				$subcategory->has('id')
					->has('name')
					->has('type')
					->has('category')
					->has('deleted_at');
			})
		);
	}

	public function test_super_admin_can_view_make() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$response = $this->get(route('subcategories.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Subcategories/Create')
		);
	}

	public function test_super_admin_can_store_subcategory() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();
		Category::factory()->create();
		$subcategoryData = Subcategory::factory()->make()->toArray();

		$response = $this->post(route('subcategories.store'), $subcategoryData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('subcategories', $subcategoryData);

		$response->assertRedirect(route('subcategories.index'))
			->assertSessionHas('success', 'Subcategory created.');
	}

	public function test_super_admin_can_view_subcategory_detail() {
		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$response = $this->get(route('subcategories.edit', $subcategory));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Subcategories/Edit')
			->has('subcategory')
		);
	}

	public function test_super_admin_can_update_subcategory() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);


		Type::factory()->create();
		$category = Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$updatedData = [
			'id' => $subcategory->id,
			'category_id' => $category->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('subcategories.edit', $subcategory))
			->put(route('subcategories.update', $subcategory), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('subcategories', $updatedData);

		$response->assertRedirect(route('subcategories.edit', $subcategory))
			->assertSessionHas('success', 'Subcategory updated.');
	}

	public function test_super_admin_can_destroy_subcategory() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$response = $this->delete(route('subcategories.destroy', $subcategory));

		$this->assertSoftDeleted('subcategories', $subcategory->toArray());

		$response->assertRedirect(route('subcategories.index'))
			->assertSessionHas('success', "$subcategory->name deleted.");
	}

	public function test_super_admin_can_restore_subcategory() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();
		$subcategory->delete();

		$response = $this->put(route('subcategories.restore', $subcategory));

		$this->assertDatabaseHas('subcategories', ['id' => $subcategory->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Subcategory restored.');
	}


	// Admin
	public function test_admin_can_view_index() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		Type::factory()->create();
		Category::factory()->create();
		Subcategory::factory()->create();

		$response = $this->get('/admin/subcategories');
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Subcategories/Index')
			->has('subcategories.data')
			->has('subcategories.data.0', function ($subcategory) {
				$subcategory->has('id')
					->has('name')
					->has('type')
					->has('category')
					->has('deleted_at');
			})
		);
	}

	public function test_admin_can_view_make() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		$response = $this->get(route('subcategories.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Subcategories/Create')
		);
	}

	public function test_admin_can_store_subcategory() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		Type::factory()->create();
		Category::factory()->create();
		$subcategoryData = Subcategory::factory()->make()->toArray();

		$response = $this->post(route('subcategories.store'), $subcategoryData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('subcategories', [
			'name' => $subcategoryData['name'],
		]);

		$response->assertRedirect(route('subcategories.index'))
			->assertSessionHas('success', 'Subcategory created.');
	}

	public function test_admin_can_view_subcategory_detail() {

		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		$response = $this->get(route('subcategories.edit', $subcategory));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Subcategories/Edit')
			->has('subcategory')
		);
	}

	public function test_admin_can_update_subcategory() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);


		Type::factory()->create();
		$category = Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$updatedData = [
			'id' => $subcategory->id,
			'category_id' => $category->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('subcategories.edit', $subcategory))
			->put(route('subcategories.update', $subcategory), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('subcategories', $updatedData);

		$response->assertRedirect(route('subcategories.edit', $subcategory))
			->assertSessionHas('success', 'Subcategory updated.');
	}

	public function test_admin_can_destroy_subcategory() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$response = $this->delete(route('subcategories.destroy', $subcategory));

		$this->assertSoftDeleted('subcategories', $subcategory->toArray());

		$response->assertRedirect(route('subcategories.index'))
			->assertSessionHas('success', "$subcategory->name deleted.");
	}

	public function test_admin_can_restore_subcategory() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();
		$subcategory->delete();

		$response = $this->put(route('subcategories.restore', $subcategory));

		$this->assertDatabaseHas('subcategories', ['id' => $subcategory->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Subcategory restored.');
	}


	//Company
	public function test_company_cannot_view_subcategories_index() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);


		$response = $this->get(route('subcategories.index'));

		$response->assertStatus(403);
	}

	public function test_company_cannot_view_subcategory_make() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$response = $this->get(route('subcategories.create'));
		$response->assertStatus(403);
	}

	public function test_company_cannot_store_subcategory() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		Type::factory()->create();
		Category::factory()->create();
		$subcategoryData = Subcategory::factory()->make()->toArray();

		$response = $this->post(route('subcategories.store'), $subcategoryData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('subcategories', $subcategoryData);
	}

	public function test_company_cannot_view_subcategory_detail_of_others() {

		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$response = $this->get(route('subcategories.edit', $subcategory));

		$response->assertStatus(403);
	}


	public function test_company_cannot_update_subcategories() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);


		Type::factory()->create();
		$category = Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$updatedData = [
			'id' => $subcategory->id,
			'category_id' => $category->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('subcategories.edit', $subcategory))
			->put(route('subcategories.update', $subcategory), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('subcategories', $updatedData);
	}

	public function test_company_cannot_destroy_subcategory() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$response = $this->delete(route('subcategories.destroy', $subcategory));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('subcategories', $subcategory->toArray());

	}

	public function test_company_cannot_restore_subcategory() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();
		$subcategory->delete();

		$response = $this->put(route('subcategories.restore', $subcategory));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('subcategories', ['id' => $subcategory->id, 'deleted_at' => null]);
	}

	//User
	public function test_regular_user_cannot_view_subcategory_index() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		$response = $this->get(route('subcategories.index'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_view_subcategory_make() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('subcategories.create'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_store_subcategory() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		Type::factory()->create();
		Category::factory()->create();
		$subcategoryData = Subcategory::factory()->make()->toArray();

		$response = $this->post(route('subcategories.store'), $subcategoryData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('subcategories', $subcategoryData);
	}

	public function test_regular_user_cannot_view_subcategory_detail() {

		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('subcategories.edit', $subcategory));

		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_update_subcategory() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		Type::factory()->create();
		$category = Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$updatedData = [
			'id' => $subcategory->id,
			'category_id' => $category->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('subcategories.edit', $subcategory))
			->put(route('subcategories.update', $subcategory), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('subcategories', $updatedData);
	}

	public function test_regular_user_cannot_destroy_subcategory() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();

		$response = $this->delete(route('subcategories.destroy', $subcategory));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('subcategories', $subcategory->toArray());

	}

	public function test_regular_user_cannot_restore_subcategory() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		Type::factory()->create();
		Category::factory()->create();
		$subcategory = Subcategory::factory()->create();
		$subcategory->delete();

		$response = $this->put(route('subcategories.restore', $subcategory));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('subcategories', ['id' => $subcategory->id, 'deleted_at' => null]);
	}
}
