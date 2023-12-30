<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminDatespotController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DatespotMediaController;
use App\Http\Controllers\Admin\SubcategoryController;
use App\Http\Controllers\Admin\TypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserDatespotController;
use App\Http\Middleware\SharePermissions;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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

// Home route
Route::get('/', function () {
	return Inertia::render('Home');
})->name('home');

// Datespot routes
Route::get('/datespots', [UserDatespotController::class, 'index'])
	->name('datespots');

Route::get('/datespots/{id}-{name}', [UserDatespotController::class, 'show'])
	->name('user-datespots.show');

Route::get('/datespots/{city}', [UserDatespotController::class, 'showByLocation'])
	->name('user-datespot.show-by-location');

Route::post('/datespots/{city}', [UserDatespotController::class, 'filterByLocation'])
	->name('user-datespot.filter-by-location');

// Email verification
Route::get('/email/verify', function () {
	return Inertia::render('Auth/VerifyEmail');
})->middleware(['auth'])->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
	$request->fulfill();

	return redirect('/');
})->middleware(['auth', 'signed', 'throttle:6,1'])->name('verification.verify');


// Review routes
Route::middleware([
	'auth',
	'signed',
	'throttle:6,1'
])->group(function () {
	Route::post('/datespots/{datespotId}/reviews', [ReviewController::class, 'store'])->name('review.store');
	Route::delete('/datespots/{datespotId}/reviews/{reviewId}',
		[ReviewController::class, 'destroy'])->name('review.destroy');
});
Route::get('/datespots/{datespotId}/reviews', [ReviewController::class, 'index'])->name('review.index');


// ADMIN
Route::prefix('admin')->middleware([
	'throttle',
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

	// Admin Datespot Media
	Route::prefix('datespots/{datespot}')->group(function () {
		Route::resource('media', DatespotMediaController::class);
		Route::post('/media/highlight-media', [DatespotMediaController::class, 'updateHighlightStatus'])
			->name('highlight-media');
	});
});



