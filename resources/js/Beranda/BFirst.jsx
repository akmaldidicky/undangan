import { motion } from "framer-motion";

export default function BFirst() {
    const bag = "img/NEW/BJK01693.JPG";
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
    const animasiAtas = {
        offscreen: {
            y: -300,
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
    return (
        <section>
            <div
                className="bg-cover grid grid-rows-3 w-full h-screen text-white items-center justify-center min-h-screen bg-center"
                style={{ backgroundImage: `url(${bag})` }}
            >
                <motion.div
                    className="grid grid-row-3 h-full"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className=" h-full content-end">
                        <motion.p
                            className="text-white text-center font-instrument"
                            variants={animasiAtas}
                        >
                            The Wedding Of
                        </motion.p>
                    </div>
                    <motion.div>
                        <motion.h3
                            className="text-5xl font-inspiration italic text-white"
                            variants={animasiBawah}
                        >
                            Dicky & Dian
                        </motion.h3>
                    </motion.div>
                </motion.div>
                <div className="h-24 w-full"></div>
                <motion.div
                    className="grid grid-rows-2  h-full"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className=" h-full content-center">
                        <motion.p
                            className="text-white text-center font-instrument underline underline-offset-2"
                            variants={animasiBawah}
                        >
                            04 Januari 2025
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
