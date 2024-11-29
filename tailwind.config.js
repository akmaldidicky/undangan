import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                inspiration: ["inspiration", ...defaultTheme.fontFamily.sans],
                instrument: ["instrument", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "loop-scroll": "loop-scroll 50s linear infinite",
                "bg-change": "bg-change 30s infinite",
                "bg-resepsi": "bg-resepsi 30s infinite",
                "bg-akad": "bg-akad 30s infinite",
            },
            keyframes: {
                "loop-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
                "bg-change": {
                    "0%": {
                        backgroundImage: "url(img/NEW/BJK01793.JPG)",
                        // opacity: "1",
                    },
                    "25%": {
                        backgroundImage: "url(img/NEW/BJK00032.JPG)",
                        // opacity: "0",
                    },
                    "50%": {
                        backgroundImage: "url(img/NEW/BJK01486.JPG)",
                        // opacity: "1",
                    },
                    "75%": {
                        backgroundImage: "url(img/NEW/BJK00089.JPG)",
                        // opacity: "0",
                    },
                    "100%": {
                        backgroundImage: "url(img/NEW/BJK01793.JPG)",
                        // opacity: "1",
                    },
                },
                "bg-akad": {
                    "0%": {
                        backgroundImage: "url(img/NEW/BJK00491.JPG)",
                        // opacity: "1",
                    },
                    "50%": {
                        backgroundImage: "url(img/NEW/BJK00131.JPG)",
                        // opacity: "0",
                    },
                    "100%": {
                        backgroundImage: "url(img/NEW/BJK00491.JPG)",
                        // opacity: "1",
                    },
                },
                "bg-resepsi": {
                    "0%": {
                        backgroundImage: "url(img/NEW/BJK00049.JPG)",
                        // opacity: "1",
                    },
                    "50%": {
                        backgroundImage: "url(img/NEW/BJK00001.JPG)",
                        // opacity: "0",
                    },
                    "100%": {
                        backgroundImage: "url(img/NEW/BJK00049.JPG)",
                        // opacity: "1",
                    },
                },
            },
            screens: {
                xs: "480px", // Breakpoint untuk layar dengan lebar minimal 480px
                sm: "640px", // Breakpoint untuk layar dengan lebar minimal 640px
                md: "768px", // Breakpoint untuk layar dengan lebar minimal 768px
                lg: "1024px", // Breakpoint untuk layar dengan lebar minimal 1024px
                xl: "1280px", // Breakpoint untuk layar dengan lebar minimal 1280px
                "2xl": "1536px", // Breakpoint untuk layar dengan lebar minimal 1536px
            },
        },
    },

    plugins: [forms],
};
