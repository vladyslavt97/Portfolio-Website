import React, { FormEvent, useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function SendEmailToMe(){
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form.current && process.env.NEXT_PUBLIC_YOUR_SERVICE_ID && process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID && process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY) {
        emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
            process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        )
        .then(
            (result) => {
            console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-slate-500 flex justify-center my-10 flex-col items-center">
      <label>Name</label>
      <br />
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="email" />
      <br />
      <label>Message</label>
      <br />
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};