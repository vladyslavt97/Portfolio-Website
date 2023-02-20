import React, { useState } from 'react'
import Image from 'next/image'
import VT from '../../public/VT.png'
import { Link } from "react-scroll";
import menu from '../../public/menu.png'
import { motion } from "framer-motion"

export default function Navigation() {
  const [visibleMenuList, setVisibleMenuList] = useState<boolean>(false); 

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
            className='py-9 mb-12 flex justify-between' id='nav1'>

            <Image alt='VT' src={VT} className="w-40 px-8"/>

            <ul className='flex items-center'>
              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <Link to='contacts' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                  Contacts
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <Link to='skills' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2"> 
                  Skills 
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <Link to='projects' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2"> 
                  Projects 
                </Link>
              </motion.li>
    {/* last change */}
              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <Link to='resume' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2"> 
                  Resume 
                </Link>
              </motion.li>
            </ul>
          </motion.nav>

          {/*  */}
          <motion.nav 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 2.5,
            }}
            viewport={{once: true}}
            className="lg:hidden" id='nav2'>
            <div className='grid grid-cols-3 gap-4 w-screen px-10 py-7'>

              <Image alt='VT' src={VT} className="w-20"/>

              <div></div>

              <button 
                className=" text-teal-200 hover:text-white flex justify-end items-center"
                onClick={()=>setVisibleMenuList(!visibleMenuList)}
                >
                <Image src={menu} alt="menu" className='w-12 h-8'/>
              </button>
            </div>

            {visibleMenuList && <div 
            className='flex flex-col z-11 text-right mr-10 rounded-lg'>
                  <ul>
                    <motion.li
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              >
                      <Link to='skills' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Skills 
                      </Link>
                    </motion.li>

                    <br />
                    <motion.li
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              >
                      <Link to='contacts' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Contacts
                      </Link>
                    </motion.li>

                    <br />
                    <motion.li
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              >
                      <Link to='projects' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Projects 
                      </Link>
                    </motion.li>

                    <br />
                    <motion.li
             whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              >
                      <Link to='resume' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Resume 
                      </Link>
                    </motion.li>

                </ul>
              </div>}
          </motion.nav>
        </section>
      </div>
  )
}
