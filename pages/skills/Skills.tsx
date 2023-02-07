import React from 'react'
import Image from 'next/image'

export default function Skills() {
  return (
    <div>
      <div id='skills'>
        <h3 className='mt-32 text-3xl py-1 text-center'>Skills:</h3>
        <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
          Here is the list of the technologies I have implemented projects with:
        </p>
        
        <div className='flex flex-row justify-center bg-transparent' id='ticker'>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="some" width={50} height={50}/> 
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="some" width={80} height={80}/>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="some" width={100} height={100}/>
        </div>
      </div>
    </div>
  )
}
