import { BiHeart } from "react-icons/bi";
import React, { useState } from "react";

export default function Closing() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="bg-white  mt-10">
            <div className="flex flex-col-reverse text-center bg-cover animate-bg-akad justify-self-center overflow-hidden h-[360px] w-[360px] rounded-md shadow-md mb-2">
                <p className="mx-auto text-white text-xs mt-2 mb-8 font-instrument">
                    Atas kehadiran dan doa restunya kami ucapkan terima kasih.
                </p>
                <h2 className="font-inspiration text-white text-5xl ">
                    Dicky & Dian
                </h2>
                <div className="flex w-11/12 mx-auto justify-center mt-8 h-10">
                    <hr className="border-t-2 border-white w-1/2 self-center" />
                    <BiHeart className=" text-white text-4xl" />
                    <hr className="border-t-2 border-white w-1/2  self-center" />
                </div>
            </div>
            <div className="flex flex-col text-center content-center ">
                <p className="font-inspiration font-bold">Powered by :</p>
                <img
                    src="/img/puspawarnalogo.png"
                    alt=""
                    className="w-8 h-8 rounded-full self-center"
                />
                <p className="text-xs text-slate-500 mb-6 mt-2">
                    Copyright &copy; {currentYear} Puspa Warna - All Rights
                    Reserved.
                    <br />
                    Instagram : @puspawarna.co
                </p>
            </div>
        </section>
    );
}
