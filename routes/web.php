<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminDatespotController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DatespotController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SubcategoryController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\UserController;
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

Route::get('/datespot/{id}-{name}', [DatespotController::class, 'show'])
	->name('user-datespots.show');

Route::get('/datespots/{city}', [DatespotController::class, 'showByLocation'])
	->name('user-datespot.show-by-location');

Route::post('/datespots/{city}', [DatespotController::class, 'filterByLocation'])
	->name('user-datespot.filter-by-location');

Route::prefix('admin')->middleware([
	SharePermissions::class,
	'auth:sanctum',
	config('jetstream.auth_session'),
	'verified',
	'role:SuperAdmin,Admin,Company',
])->group(function () {
	Route::get('/', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

	Route::resource('datespots', AdminDatespotController::class);
	Route::resource('categories', CategoryController::class);
	Route::resource('reviews', ReviewController::class);
	Route::resource('subcategories', SubcategoryController::class);
	Route::resource('types', TypeController::class);
	Route::resource('users', UserController::class);
});



