<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

//general
Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'registration']);

Route::get('/posts', [PostController::class,'getAllPost']);
Route::get('/posts/{slug}', [PostController::class,'getSinglePost']);
Route::post('/post', [PostController::class,'store']);
Route::put('/posts/{id}', [PostController::class,'update']);
Route::delete('/posts/{id}', [PostController::class,'destroy']);
Route::get('/posts/category/{id}', [PostController::class,'getPostByCategories']);
