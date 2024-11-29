import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { BiEnvelope, BiMobileAlt } from "react-icons/bi";
import BFirst from "@/Beranda/BFirst";
import BFirst2 from "@/Beranda/BFirst2";
import OurPage from "@/Beranda/OurPage";
import JadwalPage from "@/Beranda/JadwalPage";
import EventCountdown from "@/Beranda/EventCountdown";
import Gallery from "@/Beranda/Gallery";
import Reservasi from "@/Beranda/Reservasi";
import Ucapan from "@/Beranda/Ucapan";
import Closing from "@/Beranda/Closing";

export default function Dashboard(props) {
    console.log(props.ucapan);
    const section2Ref = useRef(null);
    const [isLocked, setIsLocked] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Menggunakan useLayoutEffect untuk scroll setelah DOM diperbarui
    useLayoutEffect(() => {
        if (!isLocked && section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isLocked]); // Akan dijalankan setiap kali 'isLocked' berubah

    // Fungsi untuk membuka kunci
    const handleUnlock = () => {
        setIsLocked(false); // Mengubah state isLocked menjadi false untuk membuka kunci
    };

    // Fungsi untuk toggle play/pause audio
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const bag = "img/NEW/BJK01693.JPG";

    return (
        <>
            <div className="hidden xs:block h-screen w-screen bg-slate-200 ">
                <div class="flex flex-col items-center justify-center min-h-screen">
                    <div class="flex flex-col items-center text-center text-black ">
                        <BiMobileAlt className="text-4xl  animate-bounce" />
                        <p className="font-instrument text-sm">Upsss!</p>
                    </div>
                    <div class="flex flex-col items-center p-4 text-center text-black ">
                        <p className="font-instrument text-xs w-60">
                            Undangan ini hanya bisa di akses melalui mobile
                            phone silahkan gunakan smartphone kamu untuk melihat
                            undangan ini.
                        </p>
                        <p className="font-instrument mt-2 text-xs w-60">
                            Terima kasih.
                        </p>
                        <img
                            src="/img/puspawarnalogo.png"
                            alt=""
                            className="w-12 h-12 mt-2 rounded-full"
                        />
                    </div>
                </div>
            </div>

            <div className="block xs:hidden">
                <audio ref={audioRef} className="w-full" loop>
                    <source src="music/1.mp3" type="audio/mp3" />
                    Browser Anda tidak mendukung elemen audio.
                </audio>

                {isLocked ? (
                    <div
                        className="bg-cover grid grid-rows-3 w-full h-screen text-white items-center justify-center min-h-screen bg-center"
                        style={{ backgroundImage: `url(${bag})` }}
                    >
                        <div className="grid grid-row-3 h-full">
                            <div className=" h-full content-end">
                                <p className="text-white text-center font-instrument">
                                    The Wedding Of
                                </p>
                            </div>
                            <div className="content-center">
                                <h3 className="text-5xl font-inspiration italic text-white">
                                    Dicky & Dian
                                </h3>
                            </div>
                            <div className=" h-full content-start">
                                <p className="text-white text-center font-instrument underline underline-offset-2">
                                    04 Januari 2025
                                </p>
                            </div>
                        </div>
                        <div className="h-24 w-full"></div>
                        <div className="grid grid-rows-2 h-full">
                            <div className="grid grid-row-2 ">
                                <p className="text-white text-center font-instrument self-start">
                                    Kepada Yth.
                                </p>
                                <p className="text-white text-2xl text-center font-instrument self-start">
                                    {props.nama}
                                </p>
                            </div>
                            <div className="grid justify-center content-start">
                                <button
                                    onClick={() => {
                                        togglePlayPause();
                                        handleUnlock(); // Membuka kunci dan memulai audio
                                    }}
                                    className="grid border-2 w-44 h-10 content-center justify-center rounded-md hover:bg-slate-100 hover:bg-opacity-50 animate-bounce"
                                >
                                    <div className="p-2 flex">
                                        <BiEnvelope className="text-2xl" />
                                        <p className="ml-1">Buka Undangan</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Konten yang ditampilkan setelah unlocked */}
                        <BFirst ref={section2Ref} />
                        <BFirst2 />
                        <OurPage />
                        <JadwalPage />
                        <EventCountdown targetDate={"2025-01-04T08:00:00"} />
                        <Gallery />
                        <Reservasi />
                        <Ucapan />
                        <Closing />
                        {/* Kontrol Play/Pause */}
                        <button
                            onClick={togglePlayPause}
                            className="fixed bottom-8 left-8 opacity-25 bg-[#C6754D] w-6 h-6 text-white rounded-full shadow-lg hover:opacity-100"
                        >
                            {isPlaying ? (
                                <BiPause className="text-2xl" />
                            ) : (
                                <BiPlay className="text-2xl ml-[1px]" />
                            )}
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
