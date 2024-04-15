import React from 'react';
import Marquee from 'react-fast-marquee';
import Skills from "skills.json"
import Image from "next/image";

const Ticker = () => {
    
  return (
    <div className='mt-[200px]'>
    <Marquee autoFill speed={50}>
      {Skills.map((item, index) => (
        <div key={index} className='mr-2 text-white w-[200px]'>
            <Image
                src={item.src}
                alt={item.src}
                width={item.width}
                height={item.height}
            />
        </div>
      ))}
    </Marquee>
    </div>
  );
};

export default Ticker;