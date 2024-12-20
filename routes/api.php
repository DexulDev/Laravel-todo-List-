<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//crud
Route::get('/tasks', 'App\Http\Controllers\TaskController@showtasks');
Route::get('/tasks/{id}', 'App\Http\Controllers\TaskController@showonetask');
Route::post('/tasks', 'App\Http\Controllers\TaskController@newtask');
Route::put('/tasks/{id}', 'App\Http\Controllers\TaskController@edittask');
Route::delete('/tasks/{id}', 'App\Http\Controllers\TaskController@deletetask');