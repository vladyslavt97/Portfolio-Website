import Image from 'next/image'
import VT from '../../public/VT.png'

type Props = {}

export default function Logo({}: Props) {
  return (
    <div>
        <Image alt='VT' src={VT} className="w-[120px] h-[40px] px-8 object-contain"/>
    </div>
  )
}