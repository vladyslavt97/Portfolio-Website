"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

export default function ThankYou({}: Props) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Clean up the timer if the component unmounts before the timeout is complete
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Thank you for your contribution!</h1>
    </div>
  );
}
