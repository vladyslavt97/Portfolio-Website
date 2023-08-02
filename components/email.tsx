import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BiCopy } from 'react-icons/bi';
type Props = {}

export default function email({}: Props) {
  return (
    <div className=' flex flex-row justify-center font-bold'>
        <h1 className=''>vladyslavt97@gmail.com</h1>
        <CopyToClipboard text='vladyslavt97@gmail.com'>
            <BiCopy/>
        </CopyToClipboard> 
    </div>
  )
}