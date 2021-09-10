<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/posts', [PostController::class,'getAllPost']);
Route::get('/posts/{slug}', [PostController::class,'getSinglePost']);
Route::post('/post', [PostController::class,'store']);
Route::put('/posts/{id}', [PostController::class,'update']);
Route::delete('/posts/{id}', [PostController::class,'destroy']);
Route::get('/posts/category/{id}', [PostController::class,'getPostByCategories']);
