import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BiCopy } from 'react-icons/bi';
type Props = {}

export default function email({}: Props) {
  return (
    <>
    <h3 className=''>vladyslavt97@gmail.com</h3>
    <div className=' flex flex-row justify-center font-bold'>
        <CopyToClipboard text='vladyslavt97@gmail.com'>
            <BiCopy/>
        </CopyToClipboard> 
    </div>
    
    </>
  )
}