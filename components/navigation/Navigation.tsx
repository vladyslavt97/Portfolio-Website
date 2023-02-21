import Image from 'next/image'
import VT from '../../public/VT.png'
// import { Link } from "react-scroll";
import Link from 'next/link';
import menu from '../../public/menu.png'
import close from '../../public/close.png'
import { motion } from "framer-motion"
import { useDispatch, useSelector} from 'react-redux';
import { changeOpenerStatus } from '../redux/menuOpened';
import { RootState } from '../redux/store';
import { changeModeDark } from '../redux/darkModed';

export default function Navigation() {
  const darkmode = useSelector((state: RootState) => state.darkMode.darkModeVal);
  const isOpen = useSelector((state: RootState) => state.openerState.openValue);
  const dispatch = useDispatch();

  const setIsOpen = (open: boolean) => {
    dispatch(changeOpenerStatus(open))
  }

  return (
    <div>
      <section>
          <motion.nav 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1.5,
            }}
            className='py-9 flex justify-between'>

            <Image alt='VT' src={VT} className="w-40 h-12 px-8"/>

            <Image alt="menu" src={menu}
            onClick={e => setIsOpen(true)}
            className={!isOpen ? "md:hidden w-10 h-10 mx-5 my-3 " : "hidden"}/>

            <Image alt="close" src={close}
            onClick={e=>setIsOpen(false)}
            className={isOpen ? "md:hidden w-10 h-10 mx-5 my-3 z-10 " : "hidden"}/>
            
            {/* backdrop */}
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 0.75}}
            transition={{
                duration: 0.5,
            }}
            viewport={{once: true}}
            className={isOpen ? 'absolute h-screen opacity w-screen bg-black top-0 opacity-75 md:hidden' : "hidden"} onClick={e=>setIsOpen(false)}></motion.div>
            
            {/* list of menu options */}
            <ul className={!isOpen ? "hidden md:flex md:items-right flex-col md:flex-row justify-center" : 'absolute right-0 top-[100px] flex justify-end items-end md:items-right flex-col md:flex-row z-10'} >
              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link href='#contacts' 
                // smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2" 
                onClick={()=>setIsOpen(false)}
                > 
                  Contacts
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link 
                href='#skills' 
                // smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                onClick={()=>setIsOpen(false)}
                > 
                  Skills 
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link 
                href='#projects' 
                // smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                onClick={()=>setIsOpen(false)}
                > 
                  Projects 
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link 
                href='#resume'
                // smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                onClick={()=>setIsOpen(false)}
                > 
                  Resume 
                </Link>
              </motion.li>

              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
              {!darkmode ? <h1 className='text-lg cursor-pointer'
                  onClick={()=>dispatch(changeModeDark(true))}>🌜
                </h1> : <h1 className='text-lg cursor-pointer'
                  onClick={()=>dispatch(changeModeDark(false))}>🌞
                </h1>}
              </motion.li>
            </ul>
          </motion.nav>
        </section>
      </div>
  )
}
