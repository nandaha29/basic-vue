<?php

// nama direktory
namespace App\Http\Controllers;

// import
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// call AutController
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('auth')->group(function(){
    
    // Route::<method>('<endpoint>', [<Controller Class>::class, '<method di dalam controllernya>']);
    // Route::resource('<endpoint>', <Controller Class>::class); -> biasa 
    Route::post('halo', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('checkToken', [AuthController::class, 'checkToken']);
    Route::post('logout', [AuthController::class, 'logout']);
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
