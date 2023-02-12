// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}
import emailjs from "@emailjs/browser";
// // import { SMTPClient } from 'emailjs';



export default async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {user_name, email, message} = req.body;
  // const templateParams = { user_name, email, message};

  let dataSend = {
    service_id: process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
    user_id: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
    template_params: {
      user_name,
      email,
      message,
    },
  };
  console.log(dataSend);
  
  try{
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSend),
    });
    console.log('the response: ', response.status);
    
    const data = await response.json();
    console.log('data: ', data);
    
    res.status(200).json({ message: 'sent' });
  } catch (error){
    console.log('caught: ', error);
    
  }
  // if (process.env.NEXT_PUBLIC_YOUR_SERVICE_ID && process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID){

  //   emailjs
  //   .send(
  //     process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, 
  //     process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, 
  //     templateParams, 
  //     process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
  //   .then((response) => {
  //       console.log('res: ', response);
  //       res.status(200).json({ message: 'sent' })
  //       },
  //       (error) => {
  //       console.log('errrror: ', error);
  //       }
  //   );
  // }
}
