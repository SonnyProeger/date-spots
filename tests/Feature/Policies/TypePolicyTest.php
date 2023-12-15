<?php

namespace Tests\Policies;

use App\Models\Type;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TypePolicyTest extends TestCase
{
	use RefreshDatabase;

	public function test_super_admin_can_bypass_policies() {
		$superAdmin = User::factory()->superAdmin()->make();

		$this->assertTrue($superAdmin->can('viewAny', Type::class));
		$this->assertTrue($superAdmin->can('view', Type::class));
		$this->assertTrue($superAdmin->can('create', Type::class));
		$this->assertTrue($superAdmin->can('update', Type::class));
		$this->assertTrue($superAdmin->can('delete', Type::class));
		$this->assertTrue($superAdmin->can('restore', Type::class));
		$this->assertTrue($superAdmin->can('forceDelete', Type::class));
	}

	public function test_admin_can_bypass_policies() {
		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('viewAny', Type::class));
		$this->assertTrue($admin->can('view', Type::class));
		$this->assertTrue($admin->can('create', Type::class));
		$this->assertTrue($admin->can('update', Type::class));
		$this->assertTrue($admin->can('delete', Type::class));
		$this->assertTrue($admin->can('restore', Type::class));
		$this->assertTrue($admin->can('forceDelete', Type::class));
	}

	public function test_company_cannot_access_type_policies() {
		$company = User::factory()->company()->make();

		$this->assertFalse($company->can('viewAny', Type::class));
		$this->assertFalse($company->can('view', Type::class));
		$this->assertFalse($company->can('create', Type::class));
		$this->assertFalse($company->can('update', Type::class));
		$this->assertFalse($company->can('delete', Type::class));
		$this->assertFalse($company->can('restore', Type::class));
		$this->assertFalse($company->can('forceDelete', Type::class));
	}

	public function test_regular_user_cannot_access_type_policies() {
		$regularUser = User::factory()->user()->make();

		$this->assertFalse($regularUser->can('viewAny', Type::class));
		$this->assertFalse($regularUser->can('view', Type::class));
		$this->assertFalse($regularUser->can('create', Type::class));
		$this->assertFalse($regularUser->can('update', Type::class));
		$this->assertFalse($regularUser->can('delete', Type::class));
		$this->assertFalse($regularUser->can('restore', Type::class));
		$this->assertFalse($regularUser->can('forceDelete', Type::class));
	}
}
