import React, { FormEvent, useRef, useState, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

export default function SendEmailToMe(){
    const [userName, setUserName] = useState<string>('');
    const [emailState, setEmailState] = useState<string>('');
    const [messageState, setMessageState] = useState<string>('');

    const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailState(event.target.value);
    }
    const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageState(event.target.value);
    }
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
                setUserName('')
                setEmailState('')
                setMessageState('')
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
      <input type="text" name="user_name" 
        onChange={handleChangeUserName}
        value={userName}/>
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="email" 
        onChange={handleChangeEmail}
        value={emailState}/>
      <br />
      <label>Message</label>
      <br />
      <textarea name="message" 
        onChange={handleChangeMessage}
        value={messageState}
        />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};