<?php

namespace Feature\Policies;

use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryPolicyTest extends TestCase
{
	use RefreshDatabase;

	public function test_super_admin_can_bypass_policies() {

		$superAdmin = User::factory()->superAdmin()->make();

		$this->assertTrue($superAdmin->can('viewAny', Category::class));
		$this->assertTrue($superAdmin->can('view', Category::class));
		$this->assertTrue($superAdmin->can('create', Category::class));
		$this->assertTrue($superAdmin->can('update', Category::class));
		$this->assertTrue($superAdmin->can('delete', Category::class));
		$this->assertTrue($superAdmin->can('restore', Category::class));
		$this->assertTrue($superAdmin->can('forceDelete', Category::class));
	}

	public function test_admin_can_bypass_policies() {

		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('viewAny', Category::class));
		$this->assertTrue($admin->can('view', Category::class));
		$this->assertTrue($admin->can('create', Category::class));
		$this->assertTrue($admin->can('update', Category::class));
		$this->assertTrue($admin->can('delete', Category::class));
		$this->assertTrue($admin->can('restore', Category::class));
		$this->assertTrue($admin->can('forceDelete', Category::class));
	}

	public function test_company_cannot_access_category_policies() {
		$company = User::factory()->company()->make();

		$this->assertFalse($company->can('viewAny', Category::class));
		$this->assertFalse($company->can('view', Category::class));
		$this->assertFalse($company->can('create', Category::class));
		$this->assertFalse($company->can('update', Category::class));
		$this->assertFalse($company->can('delete', Category::class));
		$this->assertFalse($company->can('restore', Category::class));
		$this->assertFalse($company->can('forceDelete', Category::class));
	}

	public function test_regular_user_cannot_access_category_policies() {

		$regularUser = User::factory()->user()->make();

		$this->assertFalse($regularUser->can('viewAny', Category::class));
		$this->assertFalse($regularUser->can('view', Category::class));
		$this->assertFalse($regularUser->can('create', Category::class));
		$this->assertFalse($regularUser->can('update', Category::class));
		$this->assertFalse($regularUser->can('delete', Category::class));
		$this->assertFalse($regularUser->can('restore', Category::class));
		$this->assertFalse($regularUser->can('forceDelete', Category::class));
	}
}

