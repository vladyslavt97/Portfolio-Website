import React from 'react';
import Marquee from 'react-fast-marquee';
import Skills from "skills.json"
import Image from "next/image";

const Ticker = () => {
    
  return (
    <div >
    <Marquee autoFill speed={30} className='fadeouttrick'>
      {Skills.map((item, index) => (
        <div key={index} className=' text-white w-16'>
            <Image
                src={item.src}
                alt={item.src}
                width={item.width/2}
                height={item.height}
            />
        </div>
      ))}
    </Marquee>
    </div>
  );
};

export default Ticker;