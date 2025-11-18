import Link from "next/link";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

export default function Collaboration() {
    const [copied, setCopied] = useState(false);
    const email = "vladyslavt97@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-[32px] border border-yellow-500/30 bg-gradient-to-r from-yellow-200/50 via-amber-100/70 to-white/80 p-8 text-center font-serif text-gray-900 shadow-2xl shadow-yellow-500/20 dark:bg-gray-900/70">
                <p className="text-sm uppercase tracking-[0.4em] text-yellow-600">
                    Collaboration
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                    Need a polished site fast?
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-200">
                    I build performant, design-forward web apps for startups and
                    small businesses. If you want a custom website at a fair
                    rate with a quick turnaround, send me a note.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3">
                    <button
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-white/80 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-md transition hover:scale-105 dark:bg-gray-800 dark:text-yellow-300"
                    >
                        <BiCopy />
                        <span>{copied ? "Copied!" : email}</span>
                    </button>
                    <span className="text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                        or use the{" "}
                        <Link
                            href="#form"
                            className="font-semibold text-blue-600 underline"
                        >
                            contact form
                        </Link>
                    </span>
                </div>
                <p className="mt-8 text-lg font-semibold text-yellow-700 dark:text-yellow-400">
                    Thank you for considering me!
                </p>
            </div>
        </section>
    );
}
