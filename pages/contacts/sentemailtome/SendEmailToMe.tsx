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
    <form ref={form} onSubmit={sendEmail} 
    className=" bg-gradient-to-r from-cyan-500 to-teal-500 flex justify-center mt-10 mx-0 flex-col items-center rounded-2xl"
    id="sendemail">
      <label>Name</label>
      <br />
      <input className="rounded-lg" 
        type="text" name="user_name" 
        onChange={handleChangeUserName}
        value={userName}/>
      <br />
      <label>Email</label>
      <br />
      <input className="rounded-lg"  
        type="email" name="email" 
        onChange={handleChangeEmail}
        value={emailState}/>
      <br />
      <label>Message</label>
      <br />
      <textarea className="rounded-lg"  
        name="message" 
        onChange={handleChangeMessage}
        value={messageState}
        />
      <br />
      <input type="submit" value="Send" 
      className=" cursor-pointer bg-white px-8 py4 mb-10 rounded-lg"/>
    </form>
  );
};