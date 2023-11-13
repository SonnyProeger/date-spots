<?php

use App\Http\Controllers\DateSpotController;
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

Route::get('/date-spots', function () {
	return Inertia::render('DateSpots');
})->name('date-spots');

Route::get('/date-spot/{id}-{name}', [DateSpotController::class, 'show'])
	->name('date-spots.show');

Route::get('/date-spots/{city}', [DateSpotController::class, 'showByLocation'])
	->name('date-spot.show-by-location');

Route::post('/date-spots/{city}', [DateSpotController::class, 'filterByLocation'])
	->name('date-spot.filter-by-location');

// TODO
//Route::get('/date-spots/{country}/{province}/{city}', 'App\Http\Controllers\DateSpotController@showByLocation');


Route::middleware([
	'auth:sanctum',
	config('jetstream.auth_session'),
	'verified',
])->group(function () {
	Route::get('/dashboard', function () {
		return Inertia::render('Dashboard');
	})->name('dashboard');
});
