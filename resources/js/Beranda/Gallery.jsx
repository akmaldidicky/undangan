import { BiMap } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Gallery() {
    const gmbr1 = [
        "img/NEW/Gallery/BJK00223.JPG",
        "img/NEW/Gallery/BJK00392.JPG",
        "img/NEW/Gallery/BJK00543.JPG",
        "img/NEW/Gallery/BJK00843.JPG",
        "img/NEW/Gallery/BJK01161.JPG",
        "img/NEW/Gallery/BJK01166.JPG",
        "img/NEW/Gallery/BJK01202.JPG",
        "img/NEW/Gallery/BJK01228.JPG",
        "img/NEW/Gallery/BJK01236.JPG",
        "img/NEW/Gallery/BJK01316.JPG",
    ];
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
                        MOMENT
                    </motion.h1>
                    <motion.h1
                        variants={animasiBawah2}
                        className="absolute self-center w-full mt-20 text-6xl font-thin font-inspiration"
                    >
                        Gallery
                    </motion.h1>
                </motion.div>
            </div>
            <div class="p-5 ">
                <div class="columns-2  gap-1">
                    {gmbr1.map((src, index) => (
                        <div className="mb-4 break-inside-avoid" key={index}>
                            <img
                                src={src}
                                alt=""
                                className="object-cover w-full rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
