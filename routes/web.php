<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\ResponseCache\Middlewares\CacheResponse;


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
})->middleware(CacheResponse::class);

Route::get('/dashboard', function () {
	return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/date-spots', 'App\Http\Controllers\DateSpotController@index')->middleware(CacheResponse::class);

Route::get('/date-spot/{id}-{name}',
	'App\Http\Controllers\DateSpotController@show')->name('date-spots.show')->middleware(CacheResponse::class);

Route::get('/date-spots/{city}',
	'App\Http\Controllers\DateSpotController@showByLocation')->middleware(CacheResponse::class);

Route::post('/date-spots/{city}', 'App\Http\Controllers\DateSpotController@filterByLocation');

// TODO
//Route::get('/date-spots/{city}/{type}/{category}/{sub-category}', 'App\Http\Controllers\DateSpotController@showByLocation');
//Route::get('/date-spots/{country}/{province}/{city}', 'App\Http\Controllers\DateSpotController@showByLocation');


Route::middleware([
	'auth:sanctum',
	config('jetstream.auth_session'),
	'verified',
])->group(function () {

});
