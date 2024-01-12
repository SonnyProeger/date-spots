<?php

namespace Tests\Feature\Controllers\Admin;

use App\Models\Category;
use App\Models\Type;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
	use RefreshDatabase;

	// SuperAdmin
	public function test_super_admin_can_view_categories_index() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();
		Category::factory()->create();
		$response = $this->get(route('categories.index'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Categories/Index')
			->has('categories.data', 1)
			->has('categories.data.0', function ($category) {
				$category->has('id')
					->has('name')
					->has('type')
					->has('deleted_at');
			})
		);
	}

	public function test_super_admin_can_view_make() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$response = $this->get(route('categories.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Categories/Create')
		);
	}

	public function test_super_admin_can_store_category() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		Type::factory()->create();
		$categoryData = Category::factory()->make()->toArray();

		$response = $this->post(route('categories.store'), $categoryData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('categories', $categoryData);

		$response->assertRedirect(route('categories.index'))
			->assertSessionHas('success', 'Category created.');
	}

	public function test_super_admin_can_view_category_detail() {
		Type::factory()->create();
		$category = Category::factory()->create();

		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);

		$response = $this->get(route('categories.edit', $category));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Categories/Edit')
			->has('category')
		);
	}

	public function test_super_admin_can_update_category() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);


		Type::factory()->create();
		$category = Category::factory()->create();

		$updatedData = [
			'id' => $category->id,
			'name' => 'Updated',
			'type_id' => $category->type_id
		];

		$response = $this
			->from(route('categories.edit', $category))
			->put(route('categories.update', $category), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('categories', $updatedData);

		$response->assertRedirect(route('categories.edit', $category))
			->assertSessionHas('success', 'Category updated.');
	}

	public function test_super_admin_can_destroy_category() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);


		Type::factory()->create();
		$category = Category::factory()->create();

		$response = $this->delete(route('categories.destroy', $category));

		$this->assertSoftDeleted('categories', $category->toArray());

		$response->assertRedirect(route('categories.index'))
			->assertSessionHas('success', "$category->name deleted.");
	}

	public function test_super_admin_can_restore_category() {
		$superAdmin = User::factory()->superAdmin()->make();
		$this->actingAs($superAdmin);


		Type::factory()->create();
		$category = Category::factory()->create();
		$category->delete();

		$response = $this->put(route('categories.restore', $category));

		$this->assertDatabaseHas('categories', ['id' => $category->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Category restored.');
	}


	// Admin
	public function test_admin_can_view_index() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		Type::factory()->create();
		Category::factory()->create();

		$response = $this->get('/admin/categories');
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Categories/Index')
			->has('categories.data')
			->has('categories.data.0', function ($category) {
				$category->has('id')
					->has('name')
					->has('type')
					->has('deleted_at');
			})
		);
	}

	public function test_admin_can_view_make() {
		$admin = User::factory()->admin()->make();
		$this->actingAs($admin);

		$response = $this->get(route('categories.create'));
		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Categories/Create')
		);
	}

	public function test_admin_can_store_category() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		Type::factory()->create();
		$categoryData = Category::factory()->make()->toArray();

		$response = $this->post(route('categories.store'), $categoryData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('categories', [
			'name' => $categoryData['name'],
		]);

		$response->assertRedirect(route('categories.index'))
			->assertSessionHas('success', 'Category created.');
	}

	public function test_admin_can_view_category_detail() {

		Type::factory()->create();
		$category = Category::factory()->create();

		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);

		$response = $this->get(route('categories.edit', $category));

		$response->assertStatus(200);
		$response->assertInertia(fn($assert) => $assert
			->component('Admin/Categories/Edit')
			->has('category')
		);
	}

	public function test_admin_can_update_category() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);


		Type::factory()->create();
		$category = Category::factory()->create();

		$updatedData = [
			'id' => $category->id,
			'name' => 'Updated Name',
			'type_id' => $category->type_id
		];

		$response = $this
			->from(route('categories.edit', $category))
			->put(route('categories.update', $category), $updatedData);

		$response->assertStatus(302);

		$this->assertDatabaseHas('categories', $updatedData);

		$response->assertRedirect(route('categories.edit', $category))
			->assertSessionHas('success', 'Category updated.');
	}

	public function test_admin_can_destroy_category() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);


		Type::factory()->create();
		$category = Category::factory()->create();

		$response = $this->delete(route('categories.destroy', $category));

		$this->assertSoftDeleted('categories', $category->toArray());

		$response->assertRedirect(route('categories.index'))
			->assertSessionHas('success', "$category->name deleted.");
	}

	public function test_admin_can_restore_category() {
		$admin = User::factory()->superAdmin()->make();
		$this->actingAs($admin);


		Type::factory()->create();
		$category = Category::factory()->create();
		$category->delete();

		$response = $this->put(route('categories.restore', $category));

		$this->assertDatabaseHas('categories', ['id' => $category->id, 'deleted_at' => null]);

		$response->assertRedirect()
			->assertSessionHas('success', 'Category restored.');
	}


	//Company
	public function test_company_cannot_view_categories_index() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);


		$response = $this->get(route('categories.index'));

		$response->assertStatus(403);
	}

	public function test_company_cannot_view_category_make() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		$response = $this->get(route('categories.create'));
		$response->assertStatus(403);
	}

	public function test_company_cannot_store_category() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);

		Type::factory()->create();
		$categoryData = Category::factory()->make()->toArray();

		$response = $this->post(route('categories.store'), $categoryData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('categories', $categoryData);
	}

	public function test_company_cannot_view_category_detail_of_others() {

		Type::factory()->create();
		$category = Category::factory()->create();

		$company = User::factory()->company()->create();
		$this->actingAs($company);

		$response = $this->get(route('categories.edit', $category));

		$response->assertStatus(403);
	}


	public function test_company_cannot_update_categories() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);


		Type::factory()->create();
		$category = Category::factory()->create();

		$updatedData = [
			'id' => $category->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('categories.edit', $category))
			->put(route('categories.update', $category), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('categories', $updatedData);
	}

	public function test_company_cannot_destroy_category() {
		$company = User::factory()->company()->create();
		$this->actingAs($company);


		Type::factory()->create();
		$category = Category::factory()->create();

		$response = $this->delete(route('categories.destroy', $category));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('categories', $category->toArray());

	}

	public function test_company_cannot_restore_category() {
		$company = User::factory()->company()->make();
		$this->actingAs($company);


		Type::factory()->create();
		$category = Category::factory()->create();
		$category->delete();

		$response = $this->put(route('categories.restore', $category));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('categories', ['id' => $category->id, 'deleted_at' => null]);
	}

	//User
	public function test_regular_user_cannot_view_category_index() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		$response = $this->get(route('categories.index'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_view_category_make() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('categories.create'));
		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_store_category() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		Type::factory()->create();
		$categoryData = Category::factory()->make()->toArray();

		$response = $this->post(route('categories.store'), $categoryData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('categories', $categoryData);
	}

	public function test_regular_user_cannot_view_category_detail() {

		Type::factory()->create();
		$category = Category::factory()->create();

		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);

		$response = $this->get(route('categories.edit', $category));

		$response->assertStatus(403);
	}

	public function test_regular_user_cannot_update_category() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		Type::factory()->create();
		$category = Category::factory()->create();

		$updatedData = [
			'id' => $category->id,
			'name' => 'Updated Name',
		];

		$response = $this
			->from(route('categories.edit', $category))
			->put(route('categories.update', $category), $updatedData);

		$response->assertStatus(403);
		$this->assertDatabaseMissing('categories', $updatedData);
	}

	public function test_regular_user_cannot_destroy_category() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		Type::factory()->create();
		$category = Category::factory()->create();

		$response = $this->delete(route('categories.destroy', $category));

		$response->assertStatus(403);

		$this->assertNotSoftDeleted('categories', $category->toArray());

	}

	public function test_regular_user_cannot_restore_category() {
		$regularUser = User::factory()->user()->make();
		$this->actingAs($regularUser);


		Type::factory()->create();
		$category = Category::factory()->create();
		$category->delete();

		$response = $this->put(route('categories.restore', $category));

		$response->assertStatus(403);

		$this->assertDatabaseMissing('categories', ['id' => $category->id, 'deleted_at' => null]);
	}
}
