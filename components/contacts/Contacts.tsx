import React from 'react'
import { Link } from "react-scroll";
import { motion } from "framer-motion"

export default function Contacts() {
  
  return (
    <div className='flex flex-col items-center text-center' id='contacts'>
        <h3 className='text-2xl text-black'>Get in Touch</h3>
        <div className='p-3'>
            <h5 className='p-1 text-black'>vladyslavt97@gmail.com</h5>
            <h5 className='p-1 text-black mb-10'>+491621616242, +380950174826</h5>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-lg"
              >
                <Link to='sendemail' smooth={true} duration={1000} 
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg" 
                > Send email 📨</Link>
            </motion.button>
        </div>
    </div>
  )
}