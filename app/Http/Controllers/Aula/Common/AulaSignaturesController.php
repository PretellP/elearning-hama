<?php

namespace App\Http\Controllers\Aula\Common;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Auth;
use Exception;
use Illuminate\Http\Request;

class AulaSignaturesController extends Controller
{
    private $userService;

    public function __construct(UserService $service)
    {
        $this->userService = $service;
    }

    public function index()
    {
        return view('aula.common.signatures.index');
    }

    public function create()
    {
        return view('aula.common.signatures.create');
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $storage = env('FILESYSTEM_DRIVER');

        try{
            $success = $this->userService->storeSignature($user, $request->get('imgBase64'), $storage);
        }catch(Exception $e){
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'stored');
        $route = $success ? route('aula.signatures.index') : null;

        return response()->json([
            "success" => $success,
            "message" => $message,
            "route" => $route
        ]);
    }
}
