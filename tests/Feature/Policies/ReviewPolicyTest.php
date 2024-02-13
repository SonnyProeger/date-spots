<?php

namespace Tests\Feature\Policies;

use App\Models\Review;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReviewPolicyTest extends TestCase
{
    use RefreshDatabase;

    public function test_super_admin_can_bypass_policies()
    {
        $superAdmin = User::factory()->superAdmin()->make();

        $this->assertTrue($superAdmin->can('viewAny', Review::class));
        $this->assertTrue($superAdmin->can('view', Review::class));
        $this->assertTrue($superAdmin->can('create', Review::class));
        $this->assertTrue($superAdmin->can('update', Review::class));
        $this->assertTrue($superAdmin->can('delete', Review::class));
        $this->assertTrue($superAdmin->can('restore', Review::class));
        $this->assertTrue($superAdmin->can('forceDelete', Review::class));
    }

    public function test_admin_can_bypass_policies()
    {
        $admin = User::factory()->admin()->make();

        $this->assertTrue($admin->can('viewAny', Review::class));
        $this->assertTrue($admin->can('view', Review::class));
        $this->assertTrue($admin->can('create', Review::class));
        $this->assertTrue($admin->can('update', Review::class));
        $this->assertTrue($admin->can('delete', Review::class));
        $this->assertTrue($admin->can('restore', Review::class));
        $this->assertTrue($admin->can('forceDelete', Review::class));
    }

    public function test_company_cannot_access_review_policies()
    {
        $company = User::factory()->company()->make();

        $this->assertFalse($company->can('viewAny', Review::class));
        $this->assertFalse($company->can('view', Review::class));
        $this->assertFalse($company->can('create', Review::class));
        $this->assertFalse($company->can('update', Review::class));
        $this->assertFalse($company->can('delete', Review::class));
        $this->assertFalse($company->can('restore', Review::class));
        $this->assertFalse($company->can('forceDelete', Review::class));
    }

    public function test_regular_user_cannot_access_review_policies()
    {
        $regularUser = User::factory()->user()->make();

        $this->assertFalse($regularUser->can('viewAny', Review::class));
        $this->assertFalse($regularUser->can('view', Review::class));
        $this->assertFalse($regularUser->can('create', Review::class));
        $this->assertFalse($regularUser->can('update', Review::class));
        $this->assertFalse($regularUser->can('delete', Review::class));
        $this->assertFalse($regularUser->can('restore', Review::class));
        $this->assertFalse($regularUser->can('forceDelete', Review::class));
    }
}
