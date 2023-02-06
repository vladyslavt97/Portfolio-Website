import React, { useState } from 'react'
import Image from 'next/image'
import VT from '../../public/VT.png'
import { Link } from "react-scroll";
import menu from '../../public/menu.png'

export default function Navigation() {
  const [visibleMenuList, setVisibleMenuList] = useState<boolean>(false); 

  return (
    <div><section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between' id='nav1'>
            <Image alt='VT' src={VT} className="w-40 px-8"/>
            <ul className='flex items-center'>

              <li>
                
              </li>

              <li>
                <Link to='projects' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2"> 
                  Projects 
                </Link>
              </li>

              <li>
                <Link to='skills' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2"> 
                  Skills 
                </Link>
              </li>

              <li>
                <Link to='resume' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-8 xs:m-2 sm:m-2"> 
                  Resume 
                </Link>
              </li>
            </ul>
          </nav>

          {/*  */}
          <nav className="lg:hidden" id='nav2'>
            <div 
            // id='nav-div'
            className='flex justify-center text-center w-screen items-center'
            >
              {/* flex justify-center text-center */}
              <Image alt='VT' src={VT} className="grow w-5 px-20"/>

              <button 
                className="grow px-3 py-2  text-teal-200 hover:text-white flex justify-center items-center"
                onClick={()=>setVisibleMenuList(!visibleMenuList)}
                >
                <Image src={menu} alt="menu" className='w-8 h-8'/>
              </button>
            </div>

            {visibleMenuList && <div className='flex flex-col z-11 text-right mx-10 bg-gradient-to-r from-white to-teal-200 p-4 rounded-lg'>
                  <ul>
                    <li>
                      <Link to='projects' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Projects 
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link to='skills' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Skills 
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link to='resume' smooth={true} duration={1000} 
                      className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" onClick={()=>setVisibleMenuList(!visibleMenuList)}> 
                        Resume 
                      </Link>
                    </li>
                </ul>
              </div>}
          </nav>

          
        </section></div>
  )
}
