import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function ThankYou({}: Props) {
  const route = useRouter();
  setTimeout(() => {
    route.push("/");
  }, 3000);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Thank you for your contribution!</h1>
    </div>
  );
}
