import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contacts() {
    return (
        <div className="flex flex-col items-center text-center" id="contacts">
            <motion.div
                initial={{
                    opacity: 0,
                    rotate: 5,
                    y: -50,
                }}
                whileInView={{
                    opacity: 1,
                    rotate: 0,
                    y: 0,
                }}
                transition={{
                    duration: 2,
                }}
                className="text-3xl text-teal-500"
            >
                Get in Touch
            </motion.div>
            <div className="p-3">
                <h5 className="p-1 text-black">vladyslavt97@gmail.com</h5>
                <h5 className="p-1 text-black mb-10">
                    +491621616242, +380950174826
                </h5>
                <motion.button
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        duration: 1,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    className="rounded-lg"
                >
                    <Link
                        href="#sendemail"
                        className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg"
                    >
                        {" "}
                        Send email 📨
                    </Link>
                </motion.button>
            </div>
        </div>
    );
}
