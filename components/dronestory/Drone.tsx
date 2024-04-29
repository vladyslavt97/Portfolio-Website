import Image from 'next/image'
import React from 'react'
import Gallery from './Gallery'

type Props = {}

export default function Drone({}: Props) {
  return (
    <div className="overflow-y-auto h-screen">
        <div className='relative'>
        <h1 className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[150px] qwe'>My Drone Story</h1>
            <Image src="/drone/manyimages.jpg" alt='manyimages' width={2000} height={2000} className='w-screen'/>
        </div>

        <p>
        {/* <h2>Timeline</h2>
        <h3>2020 ={'>'} 2022 ={'>'} 2024</h3> */}
        </p>
        <hr />

        <Gallery/>


        <Image src="/drone/9.jpg" alt='manyimages' width={900} height={900} />
        <Image src="/drone/DJI_0067-PANO.jpg" alt='manyimages' width={1000} height={900} className='w-full'/>
    </div>
  )
}