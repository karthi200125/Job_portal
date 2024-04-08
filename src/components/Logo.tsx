import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.png'

const Logo = () => {
  return (
    <Link href='/' className='cursor-pointer hover:opacity-[0.7] w-[60px] h-[60px]'>
      <img src={logo.src} alt="" className='w-full h-full object-contain ' />
    </Link>
  )
}

export default Logo