import React, { useState } from 'react'
import Image from 'next/image'
import VT from '../../public/VT.png'
import { Link } from "react-scroll";
import menu from '../../public/menu.png'
import close from '../../public/close.png'
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <section>
          <motion.nav 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2.5,
            }}
            viewport={{once: true}}
            className='py-9 flex justify-between'>

            <Image alt='VT' src={VT} className="w-40 h-12 px-8"/>

            <Image alt="menu" src={menu}
            onClick={e=>setIsOpen(!isOpen)}
            className={!isOpen ? "w-10 h-10 mx-5 my-3 md:hidden" : "hidden"}/>

            <Image alt="close" src={close}
            onClick={e=>setIsOpen(!isOpen)}
            className={isOpen ? "w-10 h-10 mx-5 my-3 z-10 md:hidden" : "hidden"}/>
            
            <div className={isOpen ? 'absolute h-screen opacity w-screen bg-black top-0 opacity-75 overflow-y-hidden' : "hidden"} onClick={e=>setIsOpen(!isOpen)}></div>
            
            <ul className={!isOpen ? "hidden md:flex md:items-right flex-col md:flex-row z-10" : 'absolute right-0 top-[100px] flex justify-end items-end md:items-right flex-col md:flex-row z-10'} >
              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link to='contacts' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2" 
                onClick={()=>setIsOpen(!isOpen)}
                > 
                  Contacts
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link to='skills' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                onClick={()=>setIsOpen(!isOpen)}
                > 
                  Skills 
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link to='projects' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                onClick={()=>setIsOpen(!isOpen)}
                > 
                  Projects 
                </Link>
              </motion.li>
              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link to='resume' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                onClick={()=>setIsOpen(!isOpen)}
                > 
                  Resume 
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        </section>
      </div>
  )
}
