type Props = {};
import Link from "next/link";
import Email from "./email";

export default function Collaboration({}: Props) {
    return (
        <div className="px-10 pt-10 font-serif text-center text-black">
            <div className=" ">
                Would you like a custom website for a reasonable price and
                delivered quickly? Feel free to reach out to me via the email{" "}
                <Email />
                or via the{" "}
                <Link href="#form" className=" font-bold italic text-blue-800">
                    form
                </Link>{" "}
                below.
            </div>

            <h1 className="text-center text-yellow-600 font-bold pt-10">
                Thank you!
            </h1>
        </div>
    );
}
