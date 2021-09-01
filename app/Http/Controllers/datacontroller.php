<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\data;
use DB;


class datacontroller extends Controller
{
 //controller for our form
    public function submit(){
        return view('contact');
    }
    public function index(Request $request) {
        $data= new data();
        $data->name= request('name');
        $data->email= request('email');
        $data->message= request('message');
        $data->save();
        return redirect()->back();
    }

}
