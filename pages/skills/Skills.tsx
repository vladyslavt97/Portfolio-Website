import React from 'react'
import Image from 'next/image'
import codewars from '../../public/codewars.png'
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <div>
      <div id='skills'>
        <h3 className='mt-32 text-3xl py-1 text-center text-black'>Skills:</h3>
        <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
          Here is the list of the technologies I have implemented projects with:
        </p>
        
        <div className='flex flex-row justify-center bg-transparent' id='ticker'>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "45deg",
            }}
            transition={{
                duration: 0.9,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "-25deg",
            }}
            transition={{
                duration: 1.1,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "-15deg",
            }}
            transition={{
                duration: 1.3,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "35deg",
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "35deg",
            }}
            transition={{
                duration: 1.7,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "25deg",
            }}
            transition={{
                duration: 1.9,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "5deg",
            }}
            transition={{
                duration: 2.1,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "45deg",
            }}
            transition={{
                duration: 2.3,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",

            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "-10deg",
            }}
            transition={{
                duration: 2.5,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="some" width={50} height={50}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "-85deg",
            }}
            transition={{
                duration: 2.7,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="some" width={50} height={50}/> 
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "55deg",
            }}
            transition={{
                duration: 2.9,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="some" width={50} height={50}/>
         <motion.img 
            initial={{
                opacity: 0,
                rotate: "5deg",
            }}
            transition={{
                duration: 3.1,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="some" width={80} height={80}/>
          <motion.img 
            initial={{
                opacity: 0,
                rotate: "-36deg",
            }}
            transition={{
                duration: 3.3,
            }}
            whileInView={{
                opacity: 1,
                rotate: "0deg",
            }}
            viewport={{once: true}}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="some" width={100} height={100}/>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 py-9'>
          <h4 className='text-black'>My page on Codewars: </h4>
          <a href="https://www.codewars.com/users/vladyslavt97"><Image id="img13" src={codewars} alt="some" width={60} height={60}/></a>
        </div>
      </div>
    </div>
  )
}
