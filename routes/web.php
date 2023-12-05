<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminDatespotController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DatespotMediaController;
use App\Http\Controllers\Admin\SubcategoryController;
use App\Http\Controllers\Admin\TypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DatespotController;
use App\Http\Controllers\ReviewController;
use App\Http\Middleware\SharePermissions;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	return Inertia::render('Home');
})->name('home');

Route::get('/datespots', function () {
	return Inertia::render('Datespots');
})->name('datespots');

Route::get('/datespots/{id}-{name}', [DatespotController::class, 'show'])
	->name('user-datespots.show');

Route::get('/datespots/{city}', [DatespotController::class, 'showByLocation'])
	->name('user-datespot.show-by-location');

Route::post('/datespots/{city}', [DatespotController::class, 'filterByLocation'])
	->name('user-datespot.filter-by-location');

// User routes for reviews
Route::get('/datespots/{datespotId}/reviews', 'ReviewController@index');
Route::post('/datespots/{datespotId}/reviews', 'ReviewController@store');
Route::delete('/datespots/{datespotId}/reviews/{reviewId}', 'ReviewController@destroy');


// ADMIN
Route::prefix('admin')->middleware([
	SharePermissions::class,
	'auth:sanctum',
	config('jetstream.auth_session'),
	'verified',
	'role:SuperAdmin,Admin,Company',
])->group(function () {
	// Admin Dashboard
	Route::get('/', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

	// Admin Datespots
	Route::resource('datespots', AdminDatespotController::class);
	Route::put('datespots/{datespot}/restore', [AdminDatespotController::class, 'restore'])
		->name('datespots.restore')
		->withTrashed();

	// Admin Categories
	Route::resource('categories', CategoryController::class);
	Route::put('categories/{category}/restore', [CategoryController::class, 'restore'])
		->name('categories.restore')
		->withTrashed();

	// Admin Reviews
	Route::resource('reviews', ReviewController::class);
	Route::put('reviews/{review}/restore', [ReviewController::class, 'restore'])
		->name('reviews.restore')
		->withTrashed();

	// Admin Subcategories
	Route::resource('subcategories', SubcategoryController::class);
	Route::put('subcategories/{subcategory}/restore', [SubcategoryController::class, 'restore'])
		->name('subcategories.restore')
		->withTrashed();

	// Admin Types
	Route::resource('types', TypeController::class);
	Route::put('types/{type}/restore', [TypeController::class, 'restore'])
		->name('types.restore')
		->withTrashed();

	//	Admin Users
	Route::resource('users', UserController::class);
	Route::put('users/{user}/restore', [UserController::class, 'restore'])
		->name('user.restore')
		->withTrashed();

	Route::prefix('datespots/{datespot}')->group(function () {
		Route::resource('media', DatespotMediaController::class);
		Route::post('/media/highlight-media', [DatespotMediaController::class, 'updateHighlightStatus']);
	});

	// Admin Reviews
	Route::resource('reviews', ReviewController::class);

});



