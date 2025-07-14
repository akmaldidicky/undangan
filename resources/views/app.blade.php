<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:title" content="Judul Website Kamu" />

    <!-- Deskripsi website kamu -->
    <meta property="og:description" content="Deskripsi singkat tentang website kamu" />

    <!-- URL website kamu -->
    <meta property="og:url" content="https://www.websitekamu.com" />

    <!-- Gambar yang akan ditampilkan ketika URL dibagikan -->
    <meta property="og:image" content="https://www.websitekamu.com/path/to/image.jpg" />

    <!-- (Opsional) Menentukan tipe gambar (misalnya JPEG, PNG) -->
    <meta property="og:image:type" content="image/jpeg" />

    <!-- (Opsional) Menentukan lebar dan tinggi gambar -->
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Tipe konten, biasanya "website" -->
    <meta property="og:type" content="website" />

        <title inertia>{{ config('app.name', 'Puspawarna') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
