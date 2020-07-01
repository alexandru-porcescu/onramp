<?php

namespace App\Http\Controllers;

use App\Completion;
use Illuminate\Http\Request;

class CompletionsController extends Controller
{
    public function store(Request $request)
    {
        Completion::updateOrCreate([
            'completable_id' => $request->input('completable_id'),
            'completable_type' => $request->input('completable_type'),
            'user_id' => $request->user()->id,
        ]);
    }

    public function destroy(Request $request)
    {
        Completion::where([
            'completable_id' => $request->input('completable_id'),
            'completable_type' => $request->input('completable_type'),
            'user_id' => $request->user()->id,
        ])->delete();
    }
}
