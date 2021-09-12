<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//general
Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'registration']);

//posts
Route::get('/posts', [PostController::class,'getAllPost']);
Route::get('/posts/{slug}', [PostController::class,'getSinglePost']);
Route::post('/post', [PostController::class,'store']);
Route::post('/posts/{id}', [PostController::class,'update']);
Route::delete('/posts/{id}', [PostController::class,'destroy']);
Route::get('/posts/category/{id}', [PostController::class,'getPostByCategories']);
Route::get('/posts/search/{query}', [PostController::class,'searchPost']);
//category

Route::get('/categories', [CategoryController::class,'getAllCategory']);
Route::get('/categories/{slug}', [CategoryController::class,'getSingleCategory']);
Route::post('/category', [CategoryController::class,'storeCategory']);
Route::put('/categories/{id}', [CategoryController::class,'updateCategory']);
Route::delete('/categories/{id}', [CategoryController::class,'destroyCategory']);
//users
Route::get('/users', [UserController::class,'getAllUser']);
