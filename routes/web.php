<?php

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
    return view('welcome');
});
// to connect data into controller
Route::post('/contacts', 'datacontroller@index')->name('data.index');
Route::get('/contacts', 'datacontroller@submit');


// the page of protection
Route::get('/protection', function () {
    return view('protect');
});
