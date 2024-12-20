<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function showtasks()
    { 
        $data[] = Task::all();
        return response()->json($data);
    }

    public function showonetask(Request $request)
    {
        $task = Task::find($request->id);
        return response()->json($task);
    }   

    public function newtask(Request $request)
    {
        $task = new Task();
        $task->name = $request->name;
        $task->description = $request->description ?? null;
        $task->save();

        return response()->json($task);
    }

    public function edittask(Request $request, string $id)
    {
        $task = Task::find($id);
        $task->description = $request->description ?? null;
        $task->completed = $request->completed === true || $request->completed === "true" || $request->completed === 1 || $request->completed === "1";
        $task->save();
        
        return response()->json($task);
    }

    /* public function deletetask(string $id)
    {
        $task = Task::find($id);
        $task->delete();
    } */
}