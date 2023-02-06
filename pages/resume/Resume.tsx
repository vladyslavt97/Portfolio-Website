import React, { useState } from 'react'
import Image from 'next/image'
import resume from '../../public/resume.png'

export default function Resume() {
    // download
  const [isLoading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const response = await fetch('../../public/CV.pdf');
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'CV-Vladyslav-Tsurkanenko.pdf';
    link.click();
    setLoading(false);
  };
  return <div>
          <h2 className='text-center mt-20 text-3xl' id='resume'>Resume</h2>
          <div className="flex justify-center flex-col my-5">
            <button className="w-60 mx-auto mt-5 bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded text-center" onClick={handleDownload}>
              {isLoading ? 'Loading...' : 'Download'}
            </button>
          </div>
            <Image src={resume} alt='resume' className='shadow-2xl my-20 p-20'/>
    </div>

}
