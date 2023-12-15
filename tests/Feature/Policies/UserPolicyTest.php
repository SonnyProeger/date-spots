<?php

namespace Tests\Feature\Policies;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserPolicyTest extends TestCase
{
	use RefreshDatabase;

	public function test_super_admin_can_bypass_policies() {
		$superAdmin = User::factory()->superAdmin()->make();

		$this->assertTrue($superAdmin->can('viewAny', User::class));
		$this->assertTrue($superAdmin->can('view', User::class));
		$this->assertTrue($superAdmin->can('create', User::class));
		$this->assertTrue($superAdmin->can('update', User::class));
		$this->assertTrue($superAdmin->can('delete', User::class));
		$this->assertTrue($superAdmin->can('restore', User::class));
		$this->assertTrue($superAdmin->can('forceDelete', User::class));
	}


	// Admin
	public function test_admin_can_view_any_policy() {
		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('viewAny', User::class));
		$this->assertTrue($admin->can('delete', User::class));
		$this->assertTrue($admin->can('restore', User::class));
		$this->assertTrue($admin->can('forceDelete', User::class));
	}

	public function test_admin_can_view_company_detail_policy() {
		$admin = User::factory()->admin()->make();
		$company = User::factory()->company()->make();

		$this->assertTrue($admin->can('view', $company));
	}

	public function test_admin_can_view_regular_users_detail_policy() {
		$admin = User::factory()->admin()->make();
		$user = User::factory()->user()->make();

		$this->assertTrue($admin->can('view', $user));
	}

	public function test_admin_cannot_view_super_admins_detail_policy() {
		$superAdmin = User::factory()->superAdmin()->make();
		$admin = User::factory()->admin()->make();

		$this->assertFalse($admin->can('view', $superAdmin));
	}

	public function test_admin_can_create_users_policy() {
		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('create', User::class));
	}


	public function test_admin_cannot_view_other_admins_detail_policy() {
		$otherAdmin = User::factory()->admin()->make();
		$admin = User::factory()->admin()->make();

		$this->assertFalse($admin->can('view', $otherAdmin));
	}

	public function test_admin_can_update_users_policy() {
		$admin = User::factory()->admin()->make();
		$users = User::factory()->company()->make();

		$this->assertTrue($admin->can('update', $users));
	}

	public function test_admin_can_update_companies_policy() {
		$admin = User::factory()->admin()->make();
		$company = User::factory()->company()->make();

		$this->assertTrue($admin->can('update', $company));
	}

	public function test_admin_cannot_update_super_admins_policy() {
		$superAdmin = User::factory()->superAdmin()->make();
		$admin = User::factory()->admin()->make();

		$this->assertFalse($admin->can('update', $superAdmin));
	}

	public function test_admin_cannot_update_other_admins_policy() {
		$otherAdmin = User::factory()->admin()->make();
		$admin = User::factory()->admin()->make();

		$this->assertFalse($admin->can('update', $otherAdmin));
	}

	public function test_admin_can_delete_policy() {
		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('delete', User::class));
	}

	public function test_admin_can_restore_policy() {
		$admin = User::factory()->admin()->make();

		$this->assertTrue($admin->can('restore', User::class));
	}

	// Company
	public function test_company_can_update_themself_policy() {
		$company = User::factory()->company()->make();

		$this->assertTrue($company->can('update', $company));
	}

	public function test_company_cannot_update_super_admins_policy() {
		$superAdmin = User::factory()->superAdmin()->make(['id' => 1]);
		$company = User::factory()->company()->make(['id' => 2]);

		$this->assertFalse($company->can('update', $superAdmin));
	}

	public function test_company_cannot_update_admins_policy() {
		$admin = User::factory()->admin()->make(['id' => 1]);
		$company = User::factory()->company()->make(['id' => 2]);

		$this->assertFalse($company->can('update', $admin));
	}

	public function test_company_cannot_update_other_companies_policy() {
		$otherCompany = User::factory()->company()->make(['id' => 1]);
		$company = User::factory()->company()->make(['id' => 2]);

		$this->assertFalse($company->can('update', $otherCompany));
	}

	public function test_company_cannot_update_users_policy() {
		$regularUser = User::factory()->user()->make(['id' => 1]);
		$company = User::factory()->company()->make(['id' => 2]);

		$this->assertFalse($company->can('update', $regularUser));
	}

	public function test_company_cannot_delete_anyone_policy() {
		$company = User::factory()->company()->make();

		$this->assertFalse($company->can('delete', User::class));
	}

	public function test_company_cannot_restore_anyone_policy() {
		$company = User::factory()->company()->make();

		$this->AssertFalse($company->can('restore', User::class));
	}


	// Regular User
	public function test_user_can_update_themself_policy() {
		$user = User::factory()->user()->make();

		$this->assertTrue($user->can('update', $user));
	}

	public function test_user_cannot_update_super_admins_policy() {
		$superAdmin = User::factory()->superAdmin()->make(['id' => 1]);
		$user = User::factory()->user()->make(['id' => 2]);

		$this->assertFalse($user->can('update', $superAdmin));
	}

	public function test_user_cannot_update_admins_policy() {
		$admin = User::factory()->admin()->make(['id' => 1]);
		$user = User::factory()->user()->make(['id' => 2]);

		$this->assertFalse($user->can('update', $admin));
	}

	public function test_user_cannot_update_other_companies_policy() {
		$otherCompany = User::factory()->company()->make(['id' => 1]);
		$user = User::factory()->user()->make(['id' => 2]);

		$this->assertFalse($user->can('update', $otherCompany));
	}

	public function test_user_cannot_update_users_policy() {
		$regularUser = User::factory()->user()->make(['id' => 1]);
		$user = User::factory()->user()->make(['id' => 2]);

		$this->assertFalse($user->can('update', $regularUser));
	}

	public function test_user_cannot_delete_anyone_policy() {
		$user = User::factory()->user()->make();

		$this->assertFalse($user->can('delete', User::class));
	}

	public function test_user_cannot_restore_anyone_policy() {
		$user = User::factory()->user()->make();

		$this->AssertFalse($user->can('restore', User::class));
	}
}
