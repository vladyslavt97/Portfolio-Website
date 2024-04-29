import Image from 'next/image'
import dronePartsJson from "./dronePartsJson.json"
type Props = {}

export default function DroneParts({}: Props) {
  return (
    <div className=' md:px-52 pb-52'>
        <h1 className='text-center mt-10 font-bold text-xl'>Drone Parts</h1>
        <div className='w-full border-black border-2 min-h-[500px]'>
            <div className='border-black border-b-2 h-[30px] grid grid-cols-3 text-center bg-blue-200'>
                <div className='border-black border-r-2 '>Image</div>
                <div className='border-black border-r-2 '>Title</div>
                <div className=''>Price</div>
            </div>
            {dronePartsJson.map((e:any)=>(
            <div key={e} className='border-black border-b-2 min-h-[100px] grid grid-cols-3 items-center'>
                <div className='border-black border-r-2 min-h-[100px] flex justify-center items-center'>
                    <Image src={`/drone/droneparts/${e.image}`} alt={e.image} width={100} height={100} className='h-[98px] object-cover'/>
                </div>
                <div className='border-black border-r-2 min-h-[100px] flex justify-center items-center'>{e.title}</div>
                <div className='min-h-[100px] flex justify-center items-center'>{e.price} Euro</div>
            </div>
            ))}

        </div>
    </div>
  )
}