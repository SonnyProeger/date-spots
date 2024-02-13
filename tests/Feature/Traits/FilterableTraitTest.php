<?php

namespace Feature\Traits;

use App\Traits\FilterableTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class FilterableTraitTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_applies_filters_to_query_for_datespots_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [

        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_datespots_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_datespots_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_datespots_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_datespots_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_datespots_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_categories_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [

        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_categories_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_categories_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_categories_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_categories_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_categories_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_subcategories_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [

        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_subcategories_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_subcategories_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_subcategories_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_subcategories_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_subcategories_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_types_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [

        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_types_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_types_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_types_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_types_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_types_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_users_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [

        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_users_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_users_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_users_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_users_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_applies_filters_to_query_for_users_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        Schema::shouldReceive('hasColumn')->andReturn(true);

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use FilterableTrait;
        };

        $query = $mockModel::query();
        $resultQuery = $trait->applyFilters($query, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }
}
