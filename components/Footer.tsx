type Props = {};
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer({}: Props) {
    return (
        <div className="font-serif text-center text-gray-800 bg-gradient-to-r from-cyan-500 to-teal-500">
            <hr />
            <div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2 md:gap-10 mt-2 mx-5">
                        <Link href="https://www.facebook.com/vladyslav.tsurkanenko">
                            <FaFacebook color="darkblue" size={30} />
                        </Link>
                        <Link href="https://github.com/vladyslavt97">
                            <FaGithub color="black" size={30} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/vladyslav-tsurkanenko/">
                            <FaLinkedin color="blue" size={30} />
                        </Link>
                    </div>
                    <div className="mr-16 md:mr-12 text-xs mt-2 flex items-end flex-col">
                        <h3 className="flex flex-row gap-3">
                            vladyslavt97@gmail.com
                            <CopyToClipboard text="vladyslavt97@gmail.com">
                                <BiCopy className="cursor-pointer" />
                            </CopyToClipboard>
                        </h3>
                        <h3 className="flex flex-row gap-3">
                            +491735709062
                            <CopyToClipboard text="+491735709062">
                                <BiCopy className="cursor-pointer" />
                            </CopyToClipboard>
                        </h3>
                        <h3 className="flex flex-row gap-3">
                            +380950174826
                            <CopyToClipboard text="+380950174826">
                                <BiCopy className="cursor-pointer" />
                            </CopyToClipboard>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 py-9">
                <h4 className="text-white font-medium">
                    My page on Codewars:{" "}
                </h4>
                <motion.a
                    animate={{
                        scale: [1, 1.1, 1.1, 1, 1],
                        rotate: [0, 0, 70, 70, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileInView={{
                        scale: [1, 1.1, 1.1, 1, 1],
                        rotate: [0, 0, 70, 70, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    href="https://www.codewars.com/users/vladyslavt97"
                >
                    <Image
                        id="img13"
                        src="/codewars.png"
                        alt="some"
                        width={30}
                        height={60}
                    />
                </motion.a>
            </div>
            <div className="flex flex-col">
                <Link href="/dronestory" className="text-white italic">
                    Drone Story
                </Link>
                <span>© 2024 Vladyslav Tsurkanenko - Developer</span>
            </div>
        </div>
    );
}
