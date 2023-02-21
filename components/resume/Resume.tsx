import React, { useState } from 'react'
import Image from 'next/image'
import resume from '../../public/resume.png'
import { motion } from 'framer-motion'

export default function Resume() {

  return <div className='flex justify-center flex-col items-center'>
          <h2 className='text-center mt-20 text-3xl text-black' id='resume'>Resume</h2>
          <motion.div
          transition={{duration: 1}}
          whileHover={{ scale: 1.1 }}
          className="flex justify-center flex-col my-5">
            <a href="https://drive.google.com/file/d/1JD_OtunqnWTPIblIqNl9xPvxcwk32q-c/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-60 mx-auto mt-5 bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded text-center"
            >Download</a>

          </motion.div>
            <Image src={resume} alt='resume' className='shadow-2xl my-20 p-20 lg:p-50  dark:bg-white'/>
    </div>

}
