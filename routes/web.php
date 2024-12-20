<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return view('todo');
});

Route::get('/tasks/show', [TaskController::class, 'showtasks']);
Route::post('/tasks/new', [TaskController::class, 'newtask']);
Route::put('/tasks/edit/{id}', [TaskController::class, 'edittask']);
/* Route::delete('/tasks/delete/{id}', [TaskController::class, 'deletetask']); */