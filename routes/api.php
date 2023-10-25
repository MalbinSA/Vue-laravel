<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'App\Http\Controllers\Person', 'prefix' => 'people'], function () {
    Route::post('/', App\Http\Controllers\Person\StoreController::class);
    Route::get('/', App\Http\Controllers\Person\IndexController::class);
    Route::get('/{person}', App\Http\Controllers\Person\ShowController::class);
    Route::patch('/{person}', App\Http\Controllers\Person\UpdateController::class);
    Route::delete('/{person}', App\Http\Controllers\Person\DeleteController::class);
});
