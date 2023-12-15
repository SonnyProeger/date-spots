<?php

namespace Tests\Feature\Policies;

use App\Models\Subcategory;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SubcategoryPolicyTest extends TestCase
{
	use RefreshDatabase;

	public function test_super_admin_can_bypass_policies() {

		$superAdmin = User::factory()->superAdmin()->make();

		$this->assertTrue($superAdmin->can('viewAny', Subcategory::class));
		$this->assertTrue($superAdmin->can('view', Subcategory::class));
		$this->assertTrue($superAdmin->can('create', Subcategory::class));
		$this->assertTrue($superAdmin->can('update', Subcategory::class));
		$this->assertTrue($superAdmin->can('delete', Subcategory::class));
		$this->assertTrue($superAdmin->can('restore', Subcategory::class));
		$this->assertTrue($superAdmin->can('forceDelete', Subcategory::class));
	}

	public function test_admin_can_bypass_policies() {

		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('viewAny', Subcategory::class));
		$this->assertTrue($admin->can('view', Subcategory::class));
		$this->assertTrue($admin->can('create', Subcategory::class));
		$this->assertTrue($admin->can('update', Subcategory::class));
		$this->assertTrue($admin->can('delete', Subcategory::class));
		$this->assertTrue($admin->can('restore', Subcategory::class));
		$this->assertTrue($admin->can('forceDelete', Subcategory::class));
	}

	public function test_company_cannot_access_subcategory_policies() {
		$company = User::factory()->company()->make();

		$this->assertFalse($company->can('viewAny', Subcategory::class));
		$this->assertFalse($company->can('view', Subcategory::class));
		$this->assertFalse($company->can('create', Subcategory::class));
		$this->assertFalse($company->can('update', Subcategory::class));
		$this->assertFalse($company->can('delete', Subcategory::class));
		$this->assertFalse($company->can('restore', Subcategory::class));
		$this->assertFalse($company->can('forceDelete', Subcategory::class));
	}

	public function test_regular_user_cannot_access_subcategory_policies() {

		$regularUser = User::factory()->user()->make();

		$this->assertFalse($regularUser->can('viewAny', Subcategory::class));
		$this->assertFalse($regularUser->can('view', Subcategory::class));
		$this->assertFalse($regularUser->can('create', Subcategory::class));
		$this->assertFalse($regularUser->can('update', Subcategory::class));
		$this->assertFalse($regularUser->can('delete', Subcategory::class));
		$this->assertFalse($regularUser->can('restore', Subcategory::class));
		$this->assertFalse($regularUser->can('forceDelete', Subcategory::class));
	}
}
