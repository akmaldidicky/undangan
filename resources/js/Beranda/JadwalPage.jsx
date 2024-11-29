import { BiMap } from "react-icons/bi";
import { motion } from "framer-motion";

export default function JadwalPage() {
    const gmbr1 = "img/NEW/BJK00491.JPG";
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
    return (
        <section className="bg-white min-h-screen">
            <div className="flex flex-col text-center h-[180px]  content-center ">
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
                className="flex bg-cover animate-bg-akad justify-self-center overflow-hidden h-[360px] w-[360px] rounded-md shadow-md mb-2"
                style={{ backgroundImage: `url(${gmbr1})` }}
            >
                <div className="flex w-full bg-[#97917A] h-20 self-end">
                    <h1 className=" flex justify-center w-full my-auto text-white text-5xl bold font-instrument">
                        AKAD
                    </h1>
                </div>
            </div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="flex flex-col justify-self-center overflow-hidden border-t-0 h-[300px] w-[360px] rounded-md"
            >
                <div className="flex justify-center h-[80px] w-full ">
                    <motion.h3
                        variants={animasiBawah1}
                        className="self-end mb-3 font-semibold font-instrument"
                    >
                        Sabtu
                    </motion.h3>
                </div>
                <div className="flex justify-center h-[60px] w-full ">
                    <div className="w-24 text-center h-full border-t-2 border-b-2 border-black">
                        <motion.h3
                            variants={animasiBawah2}
                            className="h-full  content-center font-bold text-5xl"
                        >
                            4
                        </motion.h3>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-[80px] w-full ">
                    <div className=" text-center w-full">
                        <motion.h3
                            variants={animasiBawah1}
                            className=" font-semibold font-instrument"
                        >
                            Januari 2025
                        </motion.h3>
                    </div>
                    <div className=" text-center w-full">
                        <motion.h3
                            variants={animasiBawah2}
                            className=" font-semibold font-instrument"
                        >
                            08.00 WIB
                        </motion.h3>
                    </div>
                    <div className=" text-center w-full">
                        <motion.h3
                            variants={animasiBawah1}
                            className="text-slate-400 italic font-semibold font-instrument"
                        >
                            Gedung Kesenian SPN Purwokerto
                        </motion.h3>
                    </div>
                </div>
                <div className="flex justify-center h-[60px] w-full ">
                    <button className="mt-1 w-[141px] h-[32px] text-white bg-[#C6754D] self-center rounded-xl">
                        <div className="flex items-center">
                            <BiMap className="h-6 w-6 ml-1" />
                            <a
                                href="https://maps.app.goo.gl/CVBkyzXyJa61guMz9"
                                target="_blank"
                                className="ml-2 font-instrument"
                            >
                                Lihat Lokasi
                            </a>
                        </div>
                    </button>
                </div>
            </motion.div>
            <div
                className="flex bg-cover animate-bg-resepsi justify-self-center overflow-hidden h-[360px] w-[360px] rounded-md shadow-md mb-2"
                // style={{ backgroundImage: `url(${gmbr2})` }}
            >
                <div className="flex w-full bg-[#97917A] h-20 self-end">
                    <h1 className=" flex justify-center w-full my-auto text-white text-5xl bold font-instrument">
                        RESEPSI
                    </h1>
                </div>
            </div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="flex flex-col justify-self-center overflow-hidden border-t-0 h-[300px] w-[360px] rounded-md"
            >
                <div className="flex justify-center h-[80px] w-full ">
                    <motion.h3
                        variants={animasiBawah1}
                        className="self-end mb-3 font-semibold font-instrument"
                    >
                        Sabtu
                    </motion.h3>
                </div>
                <div className="flex justify-center h-[60px] w-full ">
                    <div className="w-24 text-center h-full border-t-2 border-b-2 border-black">
                        <motion.h3
                            variants={animasiBawah2}
                            className="h-full  content-center font-bold text-5xl"
                        >
                            4
                        </motion.h3>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-[80px] w-full ">
                    <div className=" text-center w-full">
                        <motion.h3
                            variants={animasiBawah1}
                            className=" font-semibold font-instrument"
                        >
                            Januari 2025
                        </motion.h3>
                    </div>
                    <div className=" text-center w-full">
                        <motion.h3
                            variants={animasiBawah2}
                            className=" font-semibold font-instrument"
                        >
                            11.00 - 13.00 WIB
                        </motion.h3>
                    </div>
                    <div className=" text-center w-full">
                        <motion.h3
                            variants={animasiBawah1}
                            className="text-slate-400 italic font-semibold font-instrument"
                        >
                            Gedung Kesenian SPN Purwokerto
                        </motion.h3>
                    </div>
                </div>
                <div className="flex justify-center h-[60px] w-full ">
                    <button className="mt-1 w-[141px] h-[32px] text-white bg-[#C6754D] self-center rounded-xl">
                        <div className="flex items-center">
                            <BiMap className="h-6 w-6 ml-1" />
                            <a
                                href="https://maps.app.goo.gl/CVBkyzXyJa61guMz9"
                                target="_blank"
                                className="ml-2 font-instrument"
                            >
                                Lihat Lokasi
                            </a>
                        </div>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
