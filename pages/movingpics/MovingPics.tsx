import React, { useCallback, useRef, useState } from 'react'
import Image from 'next/image'



export default function MovingPics() {
  const images = [
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="some" width={50} height={50}/> 
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="some" width={50} height={50}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="some" width={80} height={80}/>
  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="some" width={100} height={100}/>
];
  const [items, setItems] = useState(images);
  const [animationRunning, setAnimationRunning] = useState(false);
  const wrapperRef = useRef();
  const indexRef = useRef();
  
  const handleRefUpdate = useCallback(node => {
    if (node !== null && items.length > 0) {
      indexRef.current = node.firstChild;
      wrapperRef.current = node;
      document.documentElement.style.setProperty('--animationDistance', `${0 - indexRef.current.offsetWidth}px`);
      document.documentElement.style.setProperty('--animationDuration', `${Math.round(indexRef.current.offsetWidth / 33)}s`);
      wrapperRef.current.classList.add('moving');
    }
  }, [items]);
  
  const handleLoop = () => {
    wrapperRef.current.classList.remove('moving');
    wrapperRef.current.style.animation = 'none';
    const t = wrapperRef.current.offsetHeight; /* trigger reflow */
    wrapperRef.current.style.animation = null;
    shiftNext([...items]);
  };

  const shiftNext = (copy) => {
    const firstitem = copy.shift();
    copy.splice(copy.length, 0, firstitem);
    setItems(copy);
  };
  
  const handleAnimationEnd = () => {
    handleLoop();
  }
  
  return (
    <div className="wrapper">
      <div className="inner" ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
        {items.map((obj, index) => <Element title={obj.key} key={obj.key+index} />
        )} 
      </div>
    </div>
  )
}