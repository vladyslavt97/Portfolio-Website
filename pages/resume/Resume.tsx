import React, { useState } from 'react'
import Image from 'next/image'
import resume from '../../public/resume.png'

export default function Resume() {

  return <div>
          <h2 className='text-center mt-20 text-3xl' id='resume'>Resume</h2>
          <div className="flex justify-center flex-col my-5">
            <a href="https://drive.google.com/file/d/15_7ajFz_EILhek6YyGEEWw448-bsB03C/view?usp=share_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-60 mx-auto mt-5 bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded text-center"
            >Download</a>

          </div>
            <Image src={resume} alt='resume' className='shadow-2xl my-20 p-20'/>
    </div>

}
