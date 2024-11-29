<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class MainController extends Controller
{

    // public function moveFile()
    // {

    //     $sourcePath = public_path("img/o/SOFTFILE/JPG1/");
    //     $new = public_path("/img/New/");
    //     $name = [
    //         "BJK00001.JPG",
    //         "BJK00027.JPG",
    //         "BJK00032.JPG",
    //         "BJK00060.JPG",
    //         "BJK00078.JPG",
    //         "BJK00083.JPG",
    //         "BJK00089.JPG",
    //         "BJK00131.JPG",
    //         "BJK00141.JPG",
    //         "BJK00143.JPG",
    //         "BJK00152.JPG",
    //         "BJK00159.JPG",
    //         "BJK00163.JPG",
    //         "BJK00181.JPG",
    //         "BJK00187.JPG",
    //         "BJK00201.JPG",
    //         "BJK00211.JPG",
    //         "BJK00212.JPG",
    //         "BJK00214.JPG",
    //         "BJK00216.JPG",
    //         "BJK00217.JPG",
    //         "BJK00223.JPG",
    //         "BJK00238.JPG",
    //         "BJK00228.JPG",
    //         "BJK00231.JPG",
    //         "BJK00237.JPG",
    //         "BJK00244.JPG",
    //         "BJK00252.JPG",
    //         "BJK00254.JPG",
    //         "BJK00261.JPG",
    //         "BJK00316.JPG",
    //         "BJK00337.JPG",
    //         "BJK00349.JPG",
    //         "BJK00353.JPG",
    //         "BJK00392.JPG",
    //         "BJK00399.JPG",
    //         "BJK00413.JPG",
    //         "BJK00414.JPG",
    //         "BJK00415.JPG",
    //         "BJK00416.JPG",
    //         "BJK00417.JPG",
    //         "BJK00418.JPG",
    //         "BJK00419.JPG",
    //         "BJK00420.JPG",
    //         "BJK00421.JPG",
    //         "BJK00347.JPG",
    //         "BJK00451.JPG",
    //         "BJK00477.JPG",
    //         "BJK00480.JPG",
    //         "BJK00485.JPG",
    //         "BJK00495.JPG",
    //         "BJK00501.JPG",
    //         "BJK00503.JPG",
    //         "BJK00510.JPG",
    //         "BJK00514.JPG",
    //         "BJK00518.JPG",
    //         "BJK00524.JPG",
    //         "BJK00596.JPG",
    //         "BJK00802.JPG",
    //         "BJK00846.JPG",
    //         "BJK00896.JPG",
    //         "BJK00934.JPG",
    //         "BJK01019.JPG",
    //         "BJK01024.JPG",
    //         "BJK09963.JPG",
    //         "BJK01316.JPG",
    //         "BJK01314.JPG",
    //         "BJK01291.JPG",
    //         "BJK01281.JPG",
    //         "BJK01255.JPG",
    //         "BJK01252.JPG",
    //         "BJK01239.JPG",
    //         "BJK01236.JPG",
    //         "BJK01228.JPG",
    //         "BJK01224.JPG",
    //         "BJK01218.JPG",
    //         "BJK01202.JPG",
    //         "BJK01201.JPG",
    //         "BJK01194.JPG",
    //         "BJK01188.JPG",
    //         "BJK01173.JPG",
    //         "BJK01166.JPG",
    //         "BJK01161.JPG",
    //         "BJK01151.JPG",
    //         "BJK01091.JPG",
    //         "BJK00049.JPG",
    //         "BJK00129.JPG",
    //         "BJK00151.JPG",
    //         "BJK00598.JPG",
    //         "BJK00153.JPG",
    //         "BJK00155.JPG",
    //         "BJK00200.JPG",
    //         "BJK00211.JPG",
    //         "BJK00214.JPG",
    //         "BJK00222.JPG",
    //         "BJK00244.JPG",
    //         "BJK00247.JPG",
    //         "BJK00286.JPG",
    //         "BJK00296.JPG",
    //         "BJK00311.JPG",
    //         "BJK00313.JPG",
    //         "BJK00342.JPG",
    //         "BJK00365.JPG",
    //         "BJK00364.JPG",
    //         "BJK00398.JPG",
    //         "BJK00457.JPG",
    //         "BJK00463.JPG",
    //         "BJK00484.JPG",
    //         "BJK00491.JPG",
    //         "BJK00496.JPG",
    //         "BJK00499.JPG",
    //         "BJK00507.JPG",
    //         "BJK00546.JPG",
    //         "BJK00543.JPG",
    //         "BJK00846.JPG",
    //         "BJK00843.JPG",
    //         "BJK01054.JPG",
    //     ];
    //     for ($i = 0; $i < count($name); $i++) {
    //         // # code...
    //         if (File::exists($sourcePath . $name[$i])) {
    //             File::move($sourcePath . $name[$i], $new . "-forest-" . $name[$i]);
    //             // return "File berhasil dipindahkan!";
    //             // return $sourcePath . $name[$i];
    //             // return "okeoo";
    //         }
    //     }
    //     return $sourcePath . $name[0];
    // }

    public function main(Request $request){
        $nama=$request->input('nama');
            return Inertia::render('Dashboard', [

                'nama'=>$nama
            ]);
        // dd($ucapan);

    }
    public function ucapan()
    {
        try {
            // Mengambil data ucapan yang diurutkan berdasarkan 'created_at' secara descending
            $ucapan = DB::table('ucapan')
                ->orderBy('created_at', 'desc')
                ->get();
    
            // Mengembalikan response JSON dengan data ucapan
            return response()->json([
                'message' => 'Ucapan berhasil dimuat',
                'data' => $ucapan
            ], 200); // Status code 200 menandakan request berhasil
        } catch (\Exception $e) {
            // Jika terjadi error, kembalikan response error dengan status 500
            return response()->json([
                'message' => 'Terjadi kesalahan saat mengambil data ucapan',
                'error' => $e->getMessage()
            ], 500); // Status code 500 untuk error server
        }
    }
    public function ucapanSave(Request $request)
    {
    try {
        // Validasi input
        $request->validate([
            'nama' => 'required|string|max:255',
            'pesan' => 'required|string|max:1000',
        ]);

        // Insert data ke tabel ucapan
        DB::table('ucapan')->insert([
            'name' => $request->nama,
            'pesan' => $request->pesan,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Mengambil data ucapan terbaru
        $ucapanList = DB::table('ucapan')->orderBy('created_at', 'desc')->get();

        return response()->json([
            'message' => 'Ucapan berhasil disimpan!',
            'data' => $ucapanList
        ], 200);  // Status code 200 untuk berhasil

    } catch (\Exception $e) {
        // Jika terjadi kesalahan, return response error
        return response()->json([
            'message' => 'Terjadi kesalahan, coba lagi nanti.',
            'error' => $e->getMessage()
        ], 500);  // Status code 500 untuk error server
    }
}
}
