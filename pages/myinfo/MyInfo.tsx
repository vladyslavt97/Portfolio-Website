import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import vlad from '../../public/Vlad.png'

export default function MyInfo() {
  return (
    <div>
        <div className='p-10'>
        <h2 className='text-4xl text-teal-600 font-medium text-center'>Vladyslav Tsurkanenko</h2>
        <h3 className='text-2xl py-2 text-center text-gray-800'>Full Stack Web Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white text-center'>I recently graduated from Spiced Academy. I am looking for possibility to learn and improve my skills with Typescript, Javascript, as well as advance my knowledge of FrontEnd and BackEnd development. I believe that my experience in banking, finance, and the skills such as: teamwork, taking initiative, and my analytical skills will help me in a new 
        environment. I am very motivated to contribute to your projects and learn the process very quickly.</p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a href='https://github.com/vladyslavt97' target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='dark:fill-white'/>
        </a>
        <a href='https://www.linkedin.com/in/vladyslav-tsurkanenko/' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='dark:fill-white'/>
        </a>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 m-10 overflow-hidden shadow-lg'>
        <Image src={vlad} alt="sometext"/>
        </div>
    </div>
  )
}
