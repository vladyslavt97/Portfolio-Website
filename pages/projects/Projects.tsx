import React from 'react'
import Image from 'next/image'
import chess from '../../public/chess-project.png'
import petition from '../../public/petition-project.gif'
import connectfour from '../../public/connect-four.gif'
import portfoliopage from '../../public/portfoliopage.gif'

export default function Projects() {
  return (
    <div>
      <h2 className='mt-32 py-4 text-teal-600 text-lg font-medium pt-8 pb-2 text-center' id='projects'>My Projects</h2>
          <div className='lg:flex gap-10 lg:flex-wrap md:flex-wrap'>

            {/* Chess */}
            <div className='text-center shadow-lg my-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Chess</h4>
              <p className='text-black'>The project using Socket.io to establish connection between players.</p>
              <Image src={chess} alt="chess" className='p-10 rounded-lg' />
              <div>
                <a href="https://github.com/vladyslavt97/chess-ts-project" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Code
                </a>
                <a href="https://chess-rn1q.onrender.com/" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Website
                </a>
              </div>
            </div>
            
            {/* Social Network */}
            <div className='text-center shadow-lg my-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Social Network</h4>
              <p className='text-black'>Bookface - is a social network to communicate with your friends.</p>
              <Image src={petition} alt="chess" className='p-10 rounded-lg'/>
              <a href="https://github.com/vladyslavt97/Social-Network" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
            </div>

            {/* Imageboard */}
            <div className='text-center shadow-lg my-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Imageboard</h4>
              <p className='text-black'>Upload your images and write comments.</p>
              <Image src={petition} alt="chess" className='p-10 rounded-lg'/>
              <a href="https://github.com/vladyslavt97/Imageboard" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
            </div>

            {/* Petition */}
            <div className='text-center shadow-lg my-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Petition</h4>
              <p className='text-black'>Register and sign the petition to support the cause.</p>
              <Image src={petition} alt="chess" className='p-10 rounded-lg'/>
              <a href="https://github.com/vladyslavt97/Petition" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
            </div>

            {/* Connect Four */}
            <div className='text-center shadow-lg my-10 py-5  bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Connect Four</h4>
              <p className='text-black'>The classic game of Connect-Four.</p>
              <Image src={connectfour} alt="chess" className='p-10 rounded-lg'/>
              <div>
                <a href="https://github.com/vladyslavt97/Connect-Four" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Code
                </a>
                <a href="https://brilliant-halva-1a9875.netlify.app/" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Website
                </a>
              </div>
            </div>

            {/* Portfolio Page*/}
            <div className='text-center shadow-lg my-10 py-5  bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Portfolio Page</h4>
              <p className='text-black'>The current page and the code.</p>
              <Image src={portfoliopage} alt="portfolio" className='p-10 rounded-lg'/>
              <div>
                <a href="https://github.com/vladyslavt97/Portfolio-Website" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Code
                </a>
                <a href="https://portfolio-jade-chi-24.vercel.app/" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Website
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}
