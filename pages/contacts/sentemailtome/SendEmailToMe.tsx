import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function SendEmailToMe(){
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current) {
        emailjs
        .sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_PUBLIC_KEY"
        )
        .then(
            (result) => {
            alert(result.text);
            },
            (error) => {
            alert(error.text);
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