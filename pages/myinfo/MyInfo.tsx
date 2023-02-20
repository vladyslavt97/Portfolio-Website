import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { motion } from "framer-motion"

export default function MyInfo() {
  return (
    <div>
        <div className='p-10'>
        <motion.h2 
        initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1,
            }}
            viewport={{once: true}}
            className='text-4xl text-teal-600 font-medium text-center'>Vladyslav Tsurkanenko</motion.h2>
        <motion.h3 
        initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2,
            }}
            viewport={{once: true}}
            className='text-2xl py-2 text-center text-gray-800'>Full Stack Web Developer</motion.h3>
        <motion.p 
        initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2,
            }}
            viewport={{once: true}} 
        className='text-md py-5 leading-8 text-gray-800 dark:text-white text-center'>I recently graduated from Spiced Academy. I am looking for possibility to learn and improve my skills with Typescript, Javascript, as well as advance my knowledge of FrontEnd and BackEnd development. I believe that my experience in banking, finance, and the skills such as: teamwork, taking initiative, and my analytical skills will help me in a new 
        environment. I am very motivated to contribute to your projects and learn the process very quickly.</motion.p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <motion.a 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1,
            }}
            viewport={{once: true}} href='https://github.com/vladyslavt97' target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='dark:fill-white animate-pulse'/>
        </motion.a>
        <motion.a 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1.5,
            }}
            viewport={{once: true}} href='https://www.linkedin.com/in/vladyslav-tsurkanenko/' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='dark:fill-white animate-pulse'/>
        </motion.a>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 m-10 overflow-hidden shadow-lg'>
        <motion.img 
            initial={{
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{
                opacity: 1
            }}
            viewport={{once: true}}
            src='/Vlad.png' alt="sometext" 
            className='rounded-dull'
            />
        </div>
    </div>
  )
}
