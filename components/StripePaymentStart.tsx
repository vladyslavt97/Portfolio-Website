"use client";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useState } from "react";

export default function StripePaymentStart() {
    const [price, setPrice] = useState<string>("");
    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
            );

            if (!stripe) throw new Error("Stripe failed to initialize.");

            const checkoutResponse = await fetch("/api/checkout_session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ price: price }),
            });

            const { sessionId } = await checkoutResponse.json();
            const stripeError = await stripe.redirectToCheckout({ sessionId });

            if (stripeError) {
                console.error(stripeError);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5 font-sans z-10">
            <div className="flex gap-5">
                <div
                    className="bg-gradient-to-br from-green-400 to-slate-200 w-[70px] text-center rounded-2xl cursor-pointer hover:from-green-500 hover:to-white shadow-lg"
                    onClick={(e) => setPrice("100")}
                >
                    1 💲
                </div>
                <div
                    className="bg-gradient-to-br from-orange-400 to-slate-200 w-[70px] text-center rounded-2xl cursor-pointer hover:from-orange-500 hover:to-white shadow-lg"
                    onClick={(e) => setPrice("1000")}
                >
                    10 💲
                </div>
                <div
                    className="bg-gradient-to-br from-pink-400 to-slate-200 w-[70px] text-center rounded-2xl cursor-pointer hover:from-pink-500 hover:to-white shadow-lg"
                    onClick={(e) => setPrice("10000")}
                >
                    100💲
                </div>
            </div>
            <button
                onClick={() => redirectToCheckout()}
                disabled={price === ""}
                className={`${
                    price === ""
                        ? "text-gray-400 bg-gray-500"
                        : "text-yellow-300 bg-sky-600 hover:bg-sky-700"
                } rounded-md px-2 text-2xl text-white shadow-lg flex items-center gap-2`}
            >
                Pay{" "}
                {price !== "" && (
                    <>
                        <span className="text-yellow-400 italic font-bold">
                            {parseInt(price) / 100}{" "}
                            <span className="text-green-400">$</span>
                        </span>
                        <Image
                            src="/cards.png"
                            width={30}
                            height={30}
                            alt="cards"
                            loading="eager"
                        />
                    </>
                )}
            </button>
            <h1 className="text-xs text-gray-200">
                * make a secure payment with Stripe
            </h1>
        </div>
    );
}
