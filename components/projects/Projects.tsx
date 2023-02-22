import React from 'react'
import Image from 'next/image'
import chess from '../../public/checkmate.gif'
import socialnetwork from '../../public/chat_sn.gif'
import chatgpt from '../../public/chatgpt.gif'
import imageboard from '../../public/imageboard-comment.gif'
import petition from '../../public/petition.gif'
import connectfour from '../../public/connect-four.gif'
import portfoliopage from '../../public/portfoliopage.gif'
import { motion } from "framer-motion"

export default function Projects() {

  return (
    <div>
      <h2 className='mt-32 py-4 text-teal-600 text-lg font-medium pt-8 pb-2 text-center' id='projects'>My Projects</h2>
          <div className='lg:flex gap-10 md:flex-wrap'>

            {/* Chess */}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10 mx-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
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
            </motion.div>
            
            {/* Social Network */}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10  mx-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Social Network</h4>
              <p className='text-black'>Bookface - is a social network to communicate with your friends.</p>
              <Image src={socialnetwork} alt="chess" className='p-10 rounded-lg'/>
              <a href="https://github.com/vladyslavt97/Social-Network" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
            </motion.div>
            
            {/* ChatGPT clone */}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10  mx-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>ChatGPT (clone)</h4>
              <p className='text-black'>The application recreates the famous platform.</p>
              <Image src={chatgpt} alt="chess" className='p-10 rounded-lg' width={1000}/>
              <a href="https://github.com/vladyslavt97/ChatGPT-clone" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
              <a href="https://chat-gpt-ochre.vercel.app/" target="_blank" rel="noopener noreferrer" 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                  Website
                </a>
            </motion.div>


            {/* Imageboard */}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10 mx-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Imageboard</h4>
              <p className='text-black'>Upload your images and write comments.</p>
              <Image src={imageboard} alt="chess" className='p-10 rounded-lg'/>
              <a href="https://github.com/vladyslavt97/Imageboard" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
            </motion.div>


            {/* Petition */}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10 mx-10 py-5 bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
              <h4 className='text-gray-800 py-1 text-xl font-bold'>Petition</h4>
              <p className='text-black'>Register and sign the petition to support the cause.</p>
              <Image src={petition} alt="chess" className='p-10 rounded-lg'/>
              <a href="https://github.com/vladyslavt97/Petition" target="_blank" rel="noopener noreferrer" 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8'>
                Code
              </a>
            </motion.div>

            {/* Connect Four */}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10 mx-10 py-5  bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1'>
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
            </motion.div>

            {/* Portfolio Page*/}
            <motion.div 
            initial={{
              rotateZ: 2,
              opacity: 0.5
            }}
            transition={{duration: 1}}
            whileInView={{
              rotateZ: 0,
              opacity: 1
            }}
            whileHover={{ scale: 1.1 }}
            className='text-center shadow-lg my-10 mx-10 py-5  bg-slate-100 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1  md:col-span-1 '>
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
            </motion.div>
          </div>
    </div>
  )
}
