import React from 'react'
import Image from 'next/image'
import codewars from '../../public/codewars.png'

export default function Skills() {
  return (
    <div>
      <div id='skills'>
        <h3 className='mt-32 text-3xl py-1 text-center text-black'>Skills:</h3>
        <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
          Here is the list of the technologies I have implemented projects with:
        </p>
        
        <div className='flex flex-row justify-center bg-transparent' id='ticker'>
          <Image id="img1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="some" width={50} height={50}/>
          <Image id="img2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="some" width={50} height={50}/>
          <Image id="img4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="some" width={50} height={50}/>
          <Image id="img8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="some" width={50} height={50}/> 
          <Image id="img11" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="some" width={50} height={50}/>
          <Image id="img12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="some" width={80} height={80}/>
          <Image id="img13" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="some" width={100} height={100}/>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 py-9'>
          <h4 className='text-black'>My page on Codewars: </h4>
          <a href="https://www.codewars.com/users/vladyslavt97"><Image id="img13" src={codewars} alt="some" width={60} height={60}/></a>
        </div>
      </div>
    </div>
  )
}
