<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Pegawai::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $pegawai = Pegawai::find($id);
        if (!$pegawai) {
            return response()->json(['message' => 'Pegawai not found'], 404);
        }
        return response()->json($pegawai, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
           "nama"=>'required',
           "email"=>'required|email'
        ]);

        $data = new Pegawai();
        $data->nama = $request->nama;
        $data->email = $request->email;
        $data->save();

        return response()->json([
            "success"=>"Create Successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $pegawai = Pegawai::find($id);
        if(!$pegawai){

            return response()->json([
                "message"=>"data not found"
            ]);
        }
        return response()->json($pegawai);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pegawai $pegawai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "nama"=>'required',
            "email"=>'required|email'
         ]);


         $data = Pegawai::find($id);
         $data->nama = $request->nama;
         $data->email = $request->email;
         $data->save();

         return response()->json([
            "data"=>$data,
            "message"=> "Update Successfully"
         ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $data = Pegawai::findOrFail($id);
        $data->delete();

        return response()->json([
            "message"=>"delete successfully"
        ]);
    }
}
