import { BiUser } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Ucapan() {
    const [nama, setNama] = useState("");
    const [ucapan, setUcapan] = useState("");
    const [pesan, setPesan] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get("/ucapan")
            .then((response) => {
                setUcapan(response.data.data); // Menyimpan ucapan ke state
                setLoading(false);
            })
            .catch((err) => {
                setError("Gagal memuat ucapan");
                setLoading(false);
            });
    }, []); // Hook ini dijalankan sekali saat komponen pertama kali dimuat
    const handleSubmit = (event) => {
        event.preventDefault();

        // Kirim data ucapan baru ke API menggunakan POST
        axios
            .post("/ucapan", {
                nama: nama,
                pesan: pesan,
            })
            .then((response) => {
                setMessage(response.data.message); // Menampilkan pesan sukses
                setUcapan(response.data.data);
                setPesan("");
                setNama("");
            })
            .catch((err) => {
                setError("Gagal menambahkan ucapan");
            });
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <section className="flex flex-col bg-white min-h-screen">
            <div className="flex flex-col text-center h-[180px]  content-center ">
                <div className="flex flex-col h-[50px]  mt-[40px] justify-center">
                    <h1 className="font-bold text-5xl font-instrument">
                        WEDDING
                    </h1>
                    <h1 className="absolute self-center w-full mt-20 text-6xl font-thin font-inspiration">
                        Wishes
                    </h1>
                </div>
            </div>
            <div className="flex h-full w-full ">
                <div className=" flex flex-col h-full rounded-xl mx-3 w-full border-2 border-slate-400 p-3">
                    <h1 className=" text-xl text-center text-slate-500 border-b-2 mb-1 border-black w-full font-instrument">
                        Beri ucapan & doa restu
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <label
                            for="username"
                            className="block mx-3 mt-2 text-sm font-medium text-gray-500 mb-2 font-instrument"
                        >
                            Nama:
                        </label>

                        <input
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            required
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 mx-auto border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your username"
                        />

                        <label
                            for="username"
                            className="block mx-3 mt-2 text-sm font-medium text-gray-500 mb-2 font-instrument"
                        >
                            Ucapan:
                        </label>

                        <textarea
                            value={pesan}
                            onChange={(e) => setPesan(e.target.value)}
                            required
                            type="text"
                            id="pesan"
                            name="pesan"
                            className="w-full px-4 mx-auto border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your username"
                        />

                        <button
                            type="submit"
                            className="mt-4  px-6 py-2 bg-[#C6754D]  text-white rounded-md w-full hover:bg-[#C6751D]  focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col  content-center mt-3">
                <div className="flex flex-col h-52 rounded-xl mx-3  border-2 border-slate-400 p-3 overflow-y-scroll">
                    {ucapan.map((item) => (
                        <div className="flex flex-col mt-2  border-b-2 border-slate-400">
                            <div className="flex ">
                                <BiUser className="text-xl mr-2 w-10" />
                                <p className="text-sm font-instrument font-bold">
                                    {item.name}
                                </p>
                            </div>
                            {/* <BiUser className="text-xl mr-2" /> */}
                            <p className="text-xs font-instrument ml-12 mb-2">
                                {item.pesan}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
