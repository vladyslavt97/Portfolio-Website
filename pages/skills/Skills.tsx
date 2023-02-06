import React from 'react'
import Ticker from './ticker/Ticker'

export default function Skills() {
  return (
    <div>
        <div id='skills'>
            <h3 className='text-3xl py-1 text-center'>Skills:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
                Here I list the technologies I have implemented projects with:
                {/* ticker */}
                <Ticker />
            </p>
        </div>
    </div>
  )
}
