<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registration(Request $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'admin' => false,
                'status' => true
            ]);
            return \response([
                'message' => 'Registration successfull',
                'user'=>$user,
            ], status: 201);
        } catch (Exception $th) {
            return \response([
                'message' => 'Something is wrong',
            ], status: 400);
        }
    }
}
