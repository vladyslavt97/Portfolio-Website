import Image from 'next/image'
import VT from '../../public/VT.png'
import { Link } from "react-scroll";
import menu from '../../public/menu.png'
import close from '../../public/close.png'
import { motion } from "framer-motion"
import { useDispatch, useSelector} from 'react-redux';
import { changeOpenerStatus } from '../redux/menuOpened';
import { RootState } from '../redux/store';

export default function Navigation() {
  const isOpen = useSelector((state: RootState) => state.openerState.openValue);
  const dispatch = useDispatch();

  const setIsOpen = () => {
    dispatch(changeOpenerStatus(!isOpen))
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
            onClick={e => setIsOpen()}
            className={!isOpen ? "w-10 h-10 mx-5 my-3 md:hidden" : "hidden"}/>

            <Image alt="close" src={close}
            onClick={e=>setIsOpen()}
            className={isOpen ? "w-10 h-10 mx-5 my-3 z-10 md:hidden" : "hidden"}/>
            
            {/* backdrop */}
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 0.75}}
            transition={{
                duration: 0.5,
            }}
            viewport={{once: true}}
            className={isOpen ? 'absolute h-screen opacity w-screen bg-black top-0 opacity-75 md:hidden' : "hidden"} onClick={e=>setIsOpen()}></motion.div>
            
            {/* list of menu options */}
            <ul className={!isOpen ? "hidden md:flex md:items-right flex-col md:flex-row" : 'absolute right-0 top-[100px] flex justify-end items-end md:items-right flex-col md:flex-row z-10'} >
              <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-4"
              >
                <Link to='contacts' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2" 
                onClick={()=>setIsOpen()}
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
                onClick={()=>setIsOpen()}
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
                onClick={()=>setIsOpen()}
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
                onClick={()=>setIsOpen()}
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
