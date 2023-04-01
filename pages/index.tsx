'use client'

import Head from 'next/head'
import Image from 'next/image'
import Resume from '../components/resume/Resume'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Navigation from '../components/navigation/Navigation'
import MyInfo from '../components/myinfo/MyInfo'
import Contacts from '../components/contacts/Contacts'
import SendEmailToMe from '../components/contacts/sentemailtome/SendEmailToMe'
import { useSelector} from "react-redux";
import { RootState} from "../components/redux/store";
import Link from 'next/link'

const colors = ["bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400", "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500", "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-300 via-lime-200 to-emerald-200"]


export default function Home() {
  const darkmode = useSelector((state: RootState) => state.darkMode.darkModeVal);
  console.log('Welcome to my portfolio website!🎉')
  const isOpen = useSelector((state: RootState) => state.openerState.openValue);
  const bgColorRedux = useSelector((state: RootState) => state.bgColor.bgColorValue);
    console.log(bgColorRedux);

  // const [color, setColor] = useState('');
  // useEffect(()=>{
  //   console.log('here');
    
  //   if(bgColorRedux === 1){
  //     setColor(colors[1])
  //   } else if (bgColorRedux === 2){
  //     setColor(colors[0])
  //   }

  // }, [bgColorRedux])
  // console.log(color);
// console.log('color', color);

  console.log(colors[bgColorRedux-1]);

  
  return (
    <div className={darkmode ? 'dark' : ''}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={isOpen ? ' bg-tele bg-no-repeat bg-cover md:bg-gradient-to-tr from-yellow-200/50 to-lime-500/80 dark:bg-gray-600 dark:bg-none overflow-hidden h-[100vh]' 
                          : ` bg-tele bg-no-repeat bg-cover md:bg-none dark:bg-gray-600 dark:bg-none  overflow-scroll h-[100vh]`}
                          >
        <div id='start'>
          <Navigation/>
        </div>
        <div className={`${colors[bgColorRedux-1]} w-screen h-screen wweerrr`}></div>

        <MyInfo />

        <Contacts />

        <section>
          <Skills/>
          <Projects />
          <Resume />
        </section>

        <SendEmailToMe />

        <Link href="#start">
          <div className='absolute bottom-5 right-5 w-10 cursor-pointer opacity-50 flex items-end justify-end animate-bounce'>
            <Image src="/arr.png" alt="arrow" width={100} height={100}
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
          </div>
        </Link>
      </main>
      
    </div>
  )
}
