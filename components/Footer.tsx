type Props = {};
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({}: Props) {
    return (
        <div className="font-serif text-center text-gray-800 bg-gradient-to-r from-cyan-500 to-teal-500">
            <hr />
            <div className="flex flex-row gap-10 mt-2 mx-5">
                <Link href="https://www.facebook.com/vladyslav.tsurkanenko">
                    <FaFacebook color="darkblue" size={30}/>
                </Link>
                <Link href="https://github.com/vladyslavt97">
                    <FaGithub  color="black" size={30}/>
                </Link>
                <Link href="https://www.linkedin.com/in/vladyslav-tsurkanenko/">
                    <FaLinkedin color="blue" size={30}/>
                </Link>
            </div>
            
            © 2024 Vladyslav Tsurkanenko - Developer
        </div>
    );
}
