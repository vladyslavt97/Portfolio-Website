import Image from 'next/image'
import VT from '../../public/VT.png'

type Props = {}

export default function Logo({}: Props) {
  return (
    <div>
        <Image alt='VT' src={VT} className="w-40 h-12 px-8"/>
    </div>
  )
}