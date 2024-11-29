import { BiLogoInstagram } from "react-icons/bi";
import { motion } from "framer-motion";

export default function OurPage() {
    const profile = "img/NEW/BJK00216.JPG";
    const profile2 = "img/NEW/BJK00187.JPG";
    const animasiBawah = {
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
    const animasiKanan = {
        offscreen: {
            x: 100,
        },
        onscreen: {
            x: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };
    const animasiKiri = {
        offscreen: {
            x: -1000,
        },
        onscreen: {
            x: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };
    return (
        <section className="bg-white">
            <div className="flex flex-col text-center h-[180px]  content-center ">
                <motion.div
                    className="flex flex-col h-[50px]  mt-[40px] justify-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.h2
                        className="text-2xl font-instrument"
                        variants={animasiBawah}
                    >
                        OUR
                    </motion.h2>
                    <motion.h1
                        className="font-bold text-4xl font-instrument"
                        variants={animasiBawah}
                    >
                        WEDDING
                    </motion.h1>
                </motion.div>
                <motion.div
                    className="flex self-center h-10 w-11/12 mt-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 1 }}
                >
                    <motion.p
                        className="font-instrument italic text-sm text-slate-500"
                        variants={animasiBawah}
                    >
                        Tanpa mengurangi rasa hormat, kami bermaksud mengundang
                        Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan
                        kami.
                    </motion.p>
                </motion.div>
            </div>
            <div
                className="flex justify-self-center overflow-hidden mt-2 h-[360px] w-[360px] bg-cover  rounded-md shadow-xl"
                style={{ backgroundImage: `url(${profile})` }}
            >
                <div className="flex justify-center h-32 w-full self-end">
                    <div className="flex flex-col h-28 w-60 mb-2 justify-center rounded-xl border border-white backdrop-blur-sm">
                        <h4 className="text-center text-white font-bold">
                            Dian Prawesti Windardini, S.K.M
                        </h4>
                        <h5 className="text-center mb-2 font-thin italic text-xs text-white">
                            Putri Bapak Daryono dan Ibu Winarni, S.Sos
                        </h5>
                        <button className="mt-2 w-[130px] h-[24px] text-white text-sm bg-[#C6754D] self-center rounded-xl">
                            <div className="flex items-center">
                                <BiLogoInstagram className="h-6 w-6 ml-1" />
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/dianprwstii/"
                                    className="ml-2 font-instrument"
                                >
                                    @dianprwstii
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex h-40">
                <motion.div
                    className="flex h-full items-center justify-center w-full text-6xl font-inspiration "
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.p variants={animasiBawah}>Dicky & Dian</motion.p>
                </motion.div>
                {/* <h2 className="h-full w-full">Lorem & Ipsum</h2> */}
            </div>
            <div
                className="flex mb-10 justify-self-center bg-cover overflow-hidden mt-2 h-[360px] w-[360px]  rounded-md shadow-xl"
                style={{ backgroundImage: `url(${profile2})` }}
            >
                <div className="flex justify-center h-32 w-full self-end">
                    <div className="flex flex-col h-28 w-60 mb-2 justify-center rounded-xl border border-white backdrop-blur-sm">
                        <h4 className="text-center text-black font-bold">
                            Dicky Akmaldi, S.T
                        </h4>
                        <h5 className="text-center mb-2 font-thin italic text-xs text-black">
                            Putra Bapak Supardi dan Ibu Tarlem
                        </h5>
                        <button className="mt-2 w-[130px] h-[24px] text-white text-sm bg-[#C6754D] self-center rounded-xl">
                            <div className="flex items-center">
                                <BiLogoInstagram className="h-6 w-6 ml-1" />
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/akmaldidicky/"
                                    className=" font-instrument"
                                >
                                    @akmaldidicky
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
}
