<?php

namespace App\Http\Controllers;

// call class
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class AuthController extends Controller
{
    //construct api
    public function __construct()
    {
        $this->middleware('auth:api')->except('login', 'register');
    }

    // call method register
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'require',
            'email' => 'require|string|email',
            'password' => 'require|confirmed',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password'=> Hash::make($request->password)
        ]);

        $token = JWTAuth::fromUser($user);
        return response()->json(['success' => true, compact('user','token')], 200);
        // Method ini jika dipanggil akan memproses registrasi / penambahan data user baru


    }       
    // call method login
    public function login(Request $request){
        return $request;
        $credentials = $request->only('email','password');

        // Jika proses pengecekan username dan password berhasil, api akan mengembalikan respon berupa nilai true, dan nilai token
        if(! $token = JWTAuth::attempt($credentials)){
            return response()->json(['success' => false], 401);
        }
        return response()->json(['success' => true, 'token' => $token], 200);
        // Method ini jika dipanggil akan memproses login dari user yang telah terdaftar.
        // Nilai token inilah yang perlu disertakan ketika hendak mengakses route dengan method yang terproteksi
    }

    // call method chekToken
    public function checkToken(){
        return response()->json(['success' => true], 200);
        // Method ini hanya digunakan untuk memeriksa apakah terdapat token yang aktif
        // Jika method ini dipanggil dan api memberi respon nilai true, maka tandanya terdapat token yang masih aktif
    }
    // call method logout
    public function logout(){
        $logout = auth()->logout;
        return response()->json(['success' => true], 200);
        // Method ini digunakan untuk memproses logout yang berfungsi untuk menghapus token
        // Jika method ini berhasil dieksekusi, user harus login agar mendapat token baru sehingga bisa kembali mengakses route dengan method yang terproteksi. 
    }
    

}

// * method middleware yang berfungsi memproteksi method-method yang ada di dalam controller.
// * Method except mengatur method mana saja di dalam AuthController yang dapat dipanggil tanpa autentikasi, yaitu method login dan register.


