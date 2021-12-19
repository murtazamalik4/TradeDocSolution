<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/about', function () {
    return view('about');
});

Route::get('/blog-page', function () {
    return view('blogPage');
});

Route::get('/credit-insurance', function () {
    return view('creditInsurance');
});

Route::get('/lc-docs', function () {
    return view('lcdoc');
});

Route::get('/services', function () {
    return view('services');
});


Route::get('/working', function () {
    return view('work');
});
