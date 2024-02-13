<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Category;
use App\Models\Datespot;
use App\Models\Review;
use App\Models\Subcategory;
use App\Models\Type;
use App\Policies\CategoryPolicy;
use App\Policies\datespotPolicy;
use App\Policies\ReviewPolicy;
use App\Policies\SubcategoryPolicy;
use App\Policies\TypePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Datespot::class => datespotPolicy::class,
        Type::class => TypePolicy::class,
        Category::class => CategoryPolicy::class,
        Subcategory::class => SubcategoryPolicy::class,
        Review::class => ReviewPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
