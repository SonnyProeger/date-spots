<?php

namespace Feature\Policies;

use App\Models\Datespot;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DatespotPolicyTest extends TestCase
{
    use RefreshDatabase;

    public function test_super_admin_can_access_all_datespot_policies()
    {
        $superAdmin = User::factory()->superAdmin()->make();

        $this->assertTrue($superAdmin->can('viewAny', Datespot::class));
        $this->assertTrue($superAdmin->can('view', Datespot::class));
        $this->assertTrue($superAdmin->can('create', Datespot::class));
        $this->assertTrue($superAdmin->can('update', Datespot::class));
        $this->assertTrue($superAdmin->can('delete', Datespot::class));
        $this->assertTrue($superAdmin->can('restore', Datespot::class));
        $this->assertTrue($superAdmin->can('forceDelete', Datespot::class));
    }

    public function test_admin_can_access_all_datespot_policies()
    {
        $admin = User::factory()->admin()->make();
        $datespot = Datespot::factory()->make();
        $this->assertTrue($admin->can('viewAny', Datespot::class));
        $this->assertTrue($admin->can('view', $datespot));
        $this->assertTrue($admin->can('create', Datespot::class));
        $this->assertTrue($admin->can('update', $datespot));
        $this->assertTrue($admin->can('delete', Datespot::class));
        $this->assertTrue($admin->can('restore', Datespot::class));
        $this->assertTrue($admin->can('forceDelete', Datespot::class));
    }

    // Company

    public function test_company_can_access_index_view_policy()
    {
        $company = User::factory()->company()->make();

        $this->assertTrue($company->can('viewAny', Datespot::class));
    }

    public function test_company_can_view_own_datespot()
    {
        $company = User::factory()->company()->make(['id' => 1]);
        $ownDatespot = Datespot::factory()->make(['user_id' => $company->id]);

        $this->assertTrue($company->can('view', $ownDatespot));
    }

    public function test_company_cannot_view_other_datespots()
    {
        $company = User::factory()->company()->make(['id' => 1]);
        $otherDatespot = Datespot::factory()->make(['id' => 2]);

        $this->assertFalse($company->can('view', $otherDatespot));
    }

    public function test_company_can_update_own_datespot()
    {
        $company = User::factory()->company()->make(['id' => 1]);
        $ownDatespot = Datespot::factory()->make(['user_id' => $company->id]);
        $this->assertTrue($company->can('update', $ownDatespot));
    }

    public function test_company_cannot_update_other_datespots()
    {
        $company = User::factory()->company()->make(['id' => 1]);
        $otherDatespot = Datespot::factory()->make(['user_id' => 2]);

        $this->assertFalse($company->can('update', $otherDatespot));
    }

    public function test_company_cannot_create_datespot()
    {
        $company = User::factory()->company()->make();

        $this->assertFalse($company->can('create', Datespot::class));
    }

    public function test_company_cannot_delete_datespots()
    {
        $company = User::factory()->company()->make();

        $this->assertFalse($company->can('delete', Datespot::class));
    }

    public function test_company_cannot_restore_any_datespots_policy()
    {
        $company = User::factory()->company()->make();

        $this->assertFalse($company->can('restore', Datespot::class));
    }

    public function test_company_cannot_force_delete_any_datespot_policy()
    {
        $company = User::factory()->company()->make();

        $this->assertFalse($company->can('forceDelete', Datespot::class));
    }

    public function test_regular_user_cannot_access_datespot_policies()
    {
        $regularUser = User::factory()->user()->make();
        $datespot = Datespot::factory()->make();

        $this->assertFalse($regularUser->can('viewAny', Datespot::class));
        $this->assertFalse($regularUser->can('view', $datespot));
        $this->assertFalse($regularUser->can('create', Datespot::class));
        $this->assertFalse($regularUser->can('update', $datespot));
        $this->assertFalse($regularUser->can('delete', Datespot::class));
        $this->assertFalse($regularUser->can('restore', Datespot::class));
        $this->assertFalse($regularUser->can('forceDelete', Datespot::class));
    }
}
