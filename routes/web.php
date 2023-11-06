<?php

use Illuminate\Foundation\Application;
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
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/date-spots', 'App\Http\Controllers\DateSpotController@index');

Route::get('/date-spot/{type}/{id}-{name}', 'App\Http\Controllers\DateSpotController@show')->name('date-spots.show');

Route::get('/date-spots/{city}', 'App\Http\Controllers\DateSpotController@showByLocation');

// TODO
//Route::get('/date-spots/{country}/{province}/{city}', 'App\Http\Controllers\DateSpotController@showByLocation');









Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

});
