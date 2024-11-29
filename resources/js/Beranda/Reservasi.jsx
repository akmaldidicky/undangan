import { BiGift, BiCopy, BiSolidCopy } from "react-icons/bi";
import React, { useState } from "react";

export default function Reservasi() {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(text);
            setTimeout(() => setCopied(null), 2000); // Reset status "copied" setelah 2 detik
        });
    };
    // State untuk mengontrol apakah modal terbuka atau tidak
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fungsi untuk membuka modal
    const openModal = () => setIsModalOpen(true);

    // Fungsi untuk menutup modal
    const closeModal = () => setIsModalOpen(false);
    const bag = "/img/atm.png";
    const bag2 = "/img/rumah.png";
    return (
        <section className="flex flex-col bg-white h-full">
            {/* <div className="flex flex-col text-center mb-3  content-center ">
                <div className="flex flex-col h-[50px]  mt-[40px] justify-center">
                    <h1 className="font-bold text-4xl font-instrument">
                        LOREM
                    </h1>
                </div>
            </div>
            <div className="flex h-full w-full ">
                <div className="h-full rounded-xl mx-3 w-full border-2 border-slate-400 p-3">
                    <form action="#" method="POST">
                        <label
                            for="username"
                            className="block mx-3 text-sm font-medium text-gray-500 mb-2 font-instrument"
                        >
                            Username:
                        </label>

                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 mx-auto border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your username"
                        />
                        <label
                            for="username"
                            className="block mx-3 text-sm font-medium text-gray-500 mb-2 font-instrument"
                        >
                            Username:
                        </label>

                        <select
                            id="options"
                            name="options"
                            class="w-full px-4 py-2 border font-instrument text-sm text-slate-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option
                                value="option1"
                                className="font-instrument text-md"
                            >
                                Hadir 1
                            </option>
                            <option value="option2">Hadir2</option>
                        </select>
                        <label
                            for="username"
                            className="block mx-3 text-sm font-medium text-gray-500 mb-2 font-instrument"
                        >
                            Username:
                        </label>

                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 mx-auto border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your username"
                        />
                        <label
                            for="username"
                            className="block mx-3 text-sm font-medium text-gray-500 mb-2 font-instrument"
                        >
                            Username:
                        </label>

                        <input
                            type="text"
                            id="username"
                            name="username"
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
            </div> */}
            <div className="flex flex-col text-center content-center ">
                <div className="flex flex-col h-[50px]  mt-[40px] justify-center">
                    <h2 className="text-2xl font-instrument">Wedding Gift</h2>
                </div>
                <div className="h-full rounded-xl mx-3  border-2 border-slate-400 p-3">
                    <div className="flex self-center ">
                        <p className="font-instrument italic text-xs text-slate-500">
                            Tanpa Mengurangi Rasa Hormat, Bagi Anda Yang Ingin
                            Memberikan Tanda Kasih Untuk Mempelai, Dapat Melalui
                            Virtual Account / E-Wallet
                        </p>
                    </div>
                    <button
                        className="mt-4 px-6 py-2 bg-[#C6754D]  text-white rounded-md w-full hover:bg-[#C6751D]  focus:outline-none focus:ring-2 focus:ring-slate-500"
                        onClick={openModal}
                    >
                        <div className="flex w-full justify-center items-center">
                            <BiGift className="text-xl" />
                            Wedding Gift
                        </div>
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 mb-3 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        {/* Tombol untuk menutup modal */}
                        <button
                            className="absolute top-2 right-2 text-gray-600"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <h2 className="text-xl  font-semibold font-instrument">
                            WEDDING GIFT
                        </h2>
                        <p className="text-slate-500 text-xs italic mb-3">
                            Silahkan transfer hadiah melalui nomor rekening
                            maupun dompet digital berikut
                        </p>
                        <div
                            className="flex flex-col bg-cover bg-center w-60 overflow-hidden mb-3 rounded-lg justify-self-center h-36 items-center justify-center shadow-xl "
                            style={{ backgroundImage: `url(${bag})` }}
                        >
                            <img
                                src="/img/mandiri.png"
                                className="w-24 self-end mb-8"
                                alt=""
                            />
                            <p className="flex text-sm w-full ml-2">
                                1800012381002{" "}
                                <button
                                    onClick={() => handleCopy("1800012381002")}
                                >
                                    {copied === "1800012381002" ? (
                                        <BiSolidCopy className="mx-4 text-lg font-thin self-center" />
                                    ) : (
                                        <BiCopy className="mx-4 text-lg font-thin self-center" />
                                    )}
                                </button>
                            </p>
                            <p className=" text-sm w-full ml-2">
                                DICKY AKMALDI
                            </p>
                        </div>
                        <div
                            className="flex flex-col bg-cover bg-center w-60 overflow-hidden mb-3 rounded-lg justify-self-center h-36 items-center justify-center shadow-xl "
                            style={{ backgroundImage: `url(${bag})` }}
                        >
                            <img
                                src="/img/mandiri.png"
                                className="w-24 self-end mb-8"
                                alt=""
                            />
                            <p className="flex text-sm w-full ml-2">
                                1800012431369{" "}
                                <button
                                    onClick={() => handleCopy("1800012431369")}
                                >
                                    {copied === "1800012431369" ? (
                                        <BiSolidCopy className="mx-4 text-lg font-thin self-center" />
                                    ) : (
                                        <BiCopy className="mx-4 text-lg font-thin self-center" />
                                    )}
                                </button>
                            </p>
                            <p className=" text-sm w-full ml-2">
                                DIAN PRAWESTI W
                            </p>
                        </div>
                        <div className="flex border-2 bg-[#41649c] bg-center w-60 overflow-hidden mb-3 rounded-lg justify-self-center h-36 items-center justify-center shadow-xl ">
                            <div className="text-xs bg-white  ml-2 mt-10 rounded-lg">
                                <p className="ml-1">
                                    Jalan gunung arjuna no 23 RT 04/RW 01
                                    Kelurahan Bobosan, Kec. Purwokerto Utara,
                                    Kab. Banyumas.{" "}
                                </p>
                                <div className="flex justify-end">
                                    {" "}
                                    <button
                                        className="flex mr-1"
                                        onClick={() =>
                                            handleCopy(`Jalan gunung arjuna no 23 RT 04/RW 01 Kelurahan
                                Bobosan, Kec. Purwokerto Utara, Kab. Banyumas`)
                                        }
                                    >
                                        {copied ===
                                        `Jalan gunung arjuna no 23 RT 04/RW 01 Kelurahan
                                Bobosan, Kec. Purwokerto Utara, Kab. Banyumas` ? (
                                            <BiSolidCopy className=" text-lg font-thin " />
                                        ) : (
                                            <BiCopy className=" text-lg font-thin " />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <img
                                src="/img/rumah.png"
                                className="w-14 mb-10 self-start  "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
