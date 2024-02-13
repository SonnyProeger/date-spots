<?php

namespace Feature\Traits;

use App\Traits\CrudOperationsTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CrudOperationsTraitTest extends TestCase
{
    use RefreshDatabase;

    // If you're using database-related operations in tests

    /** @test */
    public function it_performs_common_index_logic()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_datespots_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $filters = [

        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_datespots_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_datespots_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_datespots_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_datespots_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_datespots_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'datespots';
        };

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_categories_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        $filters = [

        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_categories_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_categories_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_categories_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_categories_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_categories_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'categories';
        };

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_subcategories_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        $filters = [

        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_subcategories_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_subcategories_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_subcategories_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_subcategories_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_subcategories_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'subcategories';
        };

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_types_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        $filters = [

        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_types_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_types_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_types_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_types_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_types_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'types';
        };

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_users_with_no_filters()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        $filters = [

        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_users_with_search_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        $filters = [
            'search' => 'test',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_users_with_role_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        $filters = [
            'role' => '1',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_users_with_trashed_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        $filters = [
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_users_with_trashed_only_filter()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        $filters = [
            'trashed' => 'only',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }

    /** @test */
    public function it_performs_common_index_logic_for_users_with_search_role_and_trashed()
    {
        $mockModel = new class extends Model
        {
            use SoftDeletes;

            protected $table = 'users';
        };

        $filters = [
            'search' => 'test',
            'role' => 1,
            'trashed' => 'with',
        ];

        $trait = new class
        {
            use CrudOperationsTrait;
        };

        $resultQuery = $trait->commonIndexLogic($mockModel, $filters);

        $this->assertInstanceOf(Builder::class, $resultQuery);
    }
}
