import React, { FormEvent, useRef, useState, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

export default function SendEmailToMe(){
    const [userName, setUserName] = useState<string>('');
    const [emailState, setEmailState] = useState<string>('');
    const [messageState, setMessageState] = useState<string>('');
    const [sending, setSending] = useState<boolean>()
    const [sent, setSent] = useState<boolean>()
    const form = useRef<HTMLFormElement>(null);

    const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailState(event.target.value);
    }
    const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageState(event.target.value);
    }
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        setSending(true);
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
                setSending(false);
                setSent(true)
                setTimeout(() => {
                  console.log("Delayed for 2 second.");
                  setSent(false);
                }, 2000)
                },
                (error) => {
                console.log(error.text);
                }
            );
        }
    };

  return <div>
        {sent && <div 
        className=" bg-gradient-to-r from-cyan-500 to-teal-500 flex justify-center mt-10 mx-0 flex-col items-center rounded-tl-2xl rounded-tr-2xl" id="sending">
            <h2 className=" text-2xl text-black">Sent 🎉</h2>
          </div>
        }
        {sending && <div 
        className=" bg-gradient-to-r from-cyan-500 to-teal-500 flex justify-center mt-10 mx-0 flex-col items-center rounded-tl-2xl rounded-tr-2xl" id="sending">
            <h2 className=" text-2xl text-black">Sending...</h2>
          </div>
        }
        {!sending &&
        <form ref={form} onSubmit={sendEmail} 
        className=" bg-gradient-to-r from-cyan-500 to-teal-500 flex justify-center mt-10 mx-0 flex-col items-center rounded-tl-2xl rounded-tr-2xl"
        id="sendemail">
          <label className=" text-lg text-black mt-5">Name</label>
          <br />
          <input className="rounded-lg bg-white text-black" 
            type="text" name="user_name" 
            onChange={handleChangeUserName}
            value={userName}/>
          <br />
          <label className=" text-lg text-black">Email</label>
          <br />
          <input className="rounded-lg bg-white text-black"  
            type="email" name="email" 
            onChange={handleChangeEmail}
            value={emailState}/>
          <br />
          <label className=" text-lg text-black">Message</label>
          <br />
          <textarea className="rounded-lg bg-white text-black"  
            name="message" 
            onChange={handleChangeMessage}
            value={messageState}
            />
          <br />
          <input type="submit" value="Send" 
          className=" cursor-pointer bg-white px-8 py4 mb-10 rounded-lg text-black"/>
        </form>}
      </div>
};