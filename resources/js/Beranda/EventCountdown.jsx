import React, { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import { motion } from "framer-motion";

const EventCountdown = ({ targetDate }) => {
    const gmbr1 = "img/NEW/BJK01874.JPG";
    const gmbr2 = "img/NEW/BJK00049.JPG";
    const animasiBawah1 = {
        offscreen: {
            y: 300,
        },
        onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };
    const animasiBawah2 = {
        offscreen: {
            y: 300,
        },
        onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
            },
        },
    };
    // Menggunakan state untuk menyimpan waktu yang tersisa dalam detik
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    // Fungsi untuk menambahkan leading zero (0) pada angka jika kurang dari dua digit
    const formatTime = (time) => time.toString().padStart(2, "0");

    // Fungsi untuk menghitung selisih waktu (dalam detik)
    function calculateTimeLeft(targetDate) {
        const target = new Date(targetDate).getTime(); // Mengubah targetDate ke dalam format timestamp
        const now = new Date().getTime(); // Waktu saat ini dalam format timestamp
        const difference = target - now; // Selisih antara target dan waktu saat ini
        return difference > 0 ? difference : 0; // Jika waktu target sudah lewat, return 0
    }
    // Menghitung hari, jam, menit, dan detik
    const calculateTime = (time) => {
        const days = Math.floor(time / (60 * 60 * 24 * 1000)); // Menghitung jumlah hari
        const hours = Math.floor(
            (time % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000)
        ); // Menghitung jam
        const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000)); // Menghitung menit
        const seconds = Math.floor((time % (60 * 1000)) / 1000); // Menghitung detik

        return {
            days: formatTime(days),
            hours: formatTime(hours),
            minutes: formatTime(minutes),
            seconds: formatTime(seconds),
        };
    };

    useEffect(() => {
        // Jika waktu target sudah tercapai (selisih waktu = 0), hentikan interval
        if (timeLeft <= 0) return;

        // Membuat interval untuk memperbarui waktu setiap detik
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => calculateTimeLeft(targetDate));
        }, 1000);

        // Cleanup: Hentikan interval jika komponen di-unmount atau waktu habis
        return () => clearInterval(timerId);
    }, [timeLeft, targetDate]);

    const { days, hours, minutes, seconds } = calculateTime(timeLeft);

    return (
        <section className=" static min-h-screen bg-[#97917A]">
            <div className="flex flex-col text-center h-[180px] text-white content-center ">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className="flex flex-col h-[50px]  mt-[40px] justify-center"
                >
                    <motion.h1
                        variants={animasiBawah1}
                        className="font-bold text-5xl font-instrument"
                    >
                        WEDDING
                    </motion.h1>
                    <motion.h1
                        variants={animasiBawah2}
                        className="absolute self-center w-full mt-20 text-6xl font-thin font-inspiration"
                    >
                        Event
                    </motion.h1>
                </motion.div>
            </div>
            <div
                className="flex shadow-2xl bg-cover h-[450px] w-[300px] rounded-tl-full rounded-tr-full bg-white mx-auto"
                style={{ backgroundImage: `url(${gmbr1})` }}
            ></div>
            {timeLeft > 0 ? (
                <table className="w-10/12 mt-5 text-white self-center mx-auto text-center font-instrument">
                    <tbody>
                        <tr>
                            <td>{days}</td>
                            <td>{hours}</td>
                            <td>{minutes}</td>
                            <td>{seconds}</td>
                        </tr>
                        <tr>
                            <td>Hari</td>
                            <td>Jam</td>
                            <td>Menit</td>
                            <td>Detik</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <table className="w-10/12 mt-5 text-white self-center mx-auto text-center font-instrument">
                    <tbody>
                        <tr>
                            <td>00</td>
                            <td>00</td>
                            <td>00</td>
                            <td>00</td>
                        </tr>
                        <tr>
                            <td>Hari</td>
                            <td>Jam</td>
                            <td>Menit</td>
                            <td>Detik</td>
                        </tr>
                    </tbody>
                </table>
            )}
            <div className="flex w-11/12 mx-auto justify-center mt-8 h-10">
                <hr className="border-t-2 border-white w-1/2 self-center" />
                <BiHeart className=" text-white text-4xl" />
                <hr className="border-t-2 border-white w-1/2  self-center" />
            </div>
        </section>
    );
};

export default EventCountdown;
