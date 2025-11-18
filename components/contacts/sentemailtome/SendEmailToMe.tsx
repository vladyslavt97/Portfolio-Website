import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "@/components/Footer";

export default function SendEmailToMe() {
    const [userName, setUserName] = useState("");
    const [emailState, setEmailState] = useState("");
    const [messageState, setMessageState] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");

        if (
            form.current &&
            process.env.NEXT_PUBLIC_YOUR_SERVICE_ID &&
            process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        ) {
            try {
                await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
                    process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
                );
                setUserName("");
                setEmailState("");
                setMessageState("");
                setStatus("sent");
                setTimeout(() => setStatus("idle"), 2500);
            } catch (error) {
                console.error(error);
                setStatus("idle");
            }
        }
    };

    const formBody = (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
            id="sendemail"
        >
            <InputField
                label="Name"
                name="user_name"
                value={userName}
                onChange={setUserName}
            />
            <InputField
                label="Email"
                type="email"
                name="email"
                value={emailState}
                onChange={setEmailState}
            />
            <TextareaField
                label="Message"
                name="message"
                value={messageState}
                onChange={setMessageState}
            />
            <button
                type="submit"
                className="w-full rounded-full bg-white/90 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-cyan-600 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px]"
            >
                Send
            </button>
        </form>
    );

    const stateView = (
        <div className="flex h-full flex-col items-center justify-center text-2xl font-semibold text-white">
            {status === "sending" ? "Sending…" : "Sent 🎉"}
        </div>
    );

    return (
        <div className="px-4 py-16">
            <div className="mx-auto max-w-3xl rounded-[32px] bg-gradient-to-r from-cyan-500 to-teal-500 p-10 text-black shadow-2xl shadow-cyan-500/30">
                {status === "idle" ? formBody : stateView}
            </div>
            <Footer />
        </div>
    );
}

type InputProps = {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
};

function InputField({ label, name, value, onChange, type = "text" }: InputProps) {
    return (
        <label className="flex flex-col text-sm font-semibold">
            <span className="mb-1 text-black/80">{label}</span>
            <input
                className="rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                type={type}
                name={name}
                placeholder={label}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                required
            />
        </label>
    );
}

type TextAreaProps = {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
};

function TextareaField({ label, name, value, onChange }: TextAreaProps) {
    return (
        <label className="flex flex-col text-sm font-semibold">
            <span className="mb-1 text-black/80">{label}</span>
            <textarea
                className="h-36 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                name={name}
                placeholder={label}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                required
            />
        </label>
    );
}
