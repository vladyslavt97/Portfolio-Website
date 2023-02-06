import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import vlad from '../../public/Vlad.png'

export default function General() {
  return (
    <div>
        <div className='p-10'>
        <h2 className='text-4xl text-teal-600 font-medium text-center'>Vladyslav Tsurkanenko</h2>
        <h3 className='text-2xl py-2 text-center'>Full Stack Web Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white text-center'>Front-end developer with a banking, accounting and political science background. Enjoy writing readable and clean code. Specialised in Javascript, Node, Vue and React, technology I enjoy the most working with, although it is alway exciting to learn new programming languages and frameworks.</p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a href='https://github.com/vladyslavt97' target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='dark:fill-white'/>
        </a>
        <a href='https://www.linkedin.com/in/vladyslav-tsurkanenko/' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='dark:fill-white'/>
        </a>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 m-10 overflow-hidden shadow-2xl'>
        <Image src={vlad} alt="sometext"/>
        </div>
    </div>
  )
}
