import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeOpenerStatus } from "../redux/menuOpened";
import { RootState } from "../redux/store";
import { changeModeDark } from "../redux/darkModed";
import Logo from "./Logo";
import BgColor from "../bgColor/BgColor";
import { normalColors } from "@/util/colors";

export default function Navigation() {
    const darkmode = useSelector(
        (state: RootState) => state.darkMode.darkModeVal
    );
    const isOpen = useSelector(
        (state: RootState) => state.openerState.openValue
    );

    const bgColorRedux = useSelector(
        (state: RootState) => state.bgColor.bgColorValue
    );
    const dispatch = useDispatch();

    const setIsOpen = (open: boolean) => {
        dispatch(changeOpenerStatus(open));
    };

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1.5,
            }}
            className=" flex justify-between relative -top-10"
        >
            <Logo />

            <div
                onClick={
                    !isOpen ? (e) => setIsOpen(true) : (e) => setIsOpen(false)
                }
                className="md:hidden cursor-pointer z-50"
            >
                <motion.div
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? 9.7 : 0,
                        x: isOpen ? -10 : 0,
                    }}
                    className={
                        isOpen
                            ? "h-[2px] w-[40px] bg-red-500 m-2"
                            : "h-[2px] w-[40px] bg-teal-600 m-2"
                    }
                ></motion.div>
                <motion.div
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.1 }}
                    //colors[bgColorRedux - 1]
                    className={
                        isOpen
                            ? "h-[2px] w-[40px] bg-red-500 m-2"
                            : `h-[2px] w-[40px] bg-${
                                  normalColors[bgColorRedux - 1]
                              }-600 m-2`
                    }
                ></motion.div>
                <motion.div
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? -9.7 : 0,
                        x: isOpen ? -10 : 0,
                    }}
                    className={
                        isOpen
                            ? "h-[2px] w-[40px] bg-red-500 m-2"
                            : "h-[2px] w-[40px] bg-teal-600 m-2"
                    }
                ></motion.div>
            </div>

            {/* backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.75 }}
                transition={{
                    duration: 0.75,
                }}
                className={
                    isOpen
                        ? "absolute h-screen opacity w-screen bg-black top-0 opacity-75 md:hidden"
                        : "hidden"
                }
                onClick={(e) => setIsOpen(false)}
            ></motion.div>

            {/* list of menu options */}
            <ul
                className={
                    !isOpen
                        ? "hidden md:flex md:items-right flex-col md:flex-row justify-center"
                        : "absolute right-0 top-[100px] flex justify-end items-end md:items-right flex-col md:flex-row z-10"
                }
            >
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-4"
                >
                    <Link
                        href="#contacts"
                        // smooth={true} duration={1000}
                        className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Contacts
                    </Link>
                </motion.li>

                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-4"
                >
                    <Link
                        href="#skills"
                        // smooth={true} duration={1000}
                        className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Skills
                    </Link>
                </motion.li>

                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-4"
                >
                    <Link
                        href="#projects"
                        // smooth={true} duration={1000}
                        className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                </motion.li>

                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-4"
                >
                    <Link
                        href="#resume"
                        // smooth={true} duration={1000}
                        className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </Link>
                </motion.li>

                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-4"
                >
                    {!darkmode ? (
                        <h1
                            className="text-2xl cursor-pointer"
                            onClick={() => dispatch(changeModeDark(true))}
                        >
                            🌜
                        </h1>
                    ) : (
                        <h1
                            className="text-lg cursor-pointer"
                            onClick={() => dispatch(changeModeDark(false))}
                        >
                            🌞
                        </h1>
                    )}
                </motion.li>

                <BgColor />
            </ul>
        </motion.nav>
    );
}
