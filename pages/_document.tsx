import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* add bg */}
        {/* <Image className='absolute z-[0]' src="/telegram.jpg" alt="bg" width={100} height={100}/> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
