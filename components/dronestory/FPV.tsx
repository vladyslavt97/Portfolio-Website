import Image from 'next/image'
import YouTube, { YouTubeProps } from 'react-youtube';

type Props = {}

export default function FPV({}: Props) {
    const opts: YouTubeProps['opts'] = {
        height: '150',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
  return (
    <div className=' md:p-52'>
        <h1 className='text-center my-10 font-bold text-xl'>My FPV path...</h1>
        <div className='flex flex-row justify-between gap-2'>
            <Image src="/drone/fpv/1.jpg" alt='manyimages' width={500} height={500} className='w-[500px]'/>
            <p>1. Putting together the frame and the motors can be a pain, because of the heat reducing objectives as well as your planned drone configuration. Therefore, choosing the right frame is crucial.
            </p>
        </div>
        <div className='flex flex-row justify-between gap-2 my-10'>
            <p>2. Attaching the motors and tightening the screws turned out more physical than I thought. Starting at the soldering part and all the way to installing the propellers. Do not neglect the recommended tools.</p>
            <Image src="/drone/fpv/2.jpg" alt='manyimages' width={500} height={500} className='w-[500px]'/>
        </div>
        <div className='flex flex-row justify-between gap-2 my-10'>
            <Image src="/drone/fpv/3.jpg" alt='manyimages' width={500} height={500} className='w-[550px] h-[500px]'/>
            <Image src="/drone/fpv/4.jpg" alt='manyimages' width={500} height={500} className='object-cover h-[500px] w-[550px]'/>
        </div>
        <div className='flex flex-row justify-between gap-2 my-10'>
            <Image src="/drone/fpv/5.jpg" alt='manyimages' width={500} height={500} className='w-[550px]'/>
            <Image src="/drone/fpv/6.jpg" alt='manyimages' width={500} height={500} className='object-cover w-[550px]'/>
        </div>
        <div className='flex flex-row justify-between gap-2 my-10'>
            <YouTube opts={opts} videoId="GiswFxwjjCA" />
            <YouTube opts={opts} videoId="q59SE4rUHP8" />
            <YouTube opts={opts} videoId="vG0acaAqCaA" />
        </div>

    </div>
  )
}