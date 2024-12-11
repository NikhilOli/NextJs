'use client'

import { links } from '@/app/utils/navlinks'
import Link from 'next/link'
import React from 'react'
import Btn from './Button'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='logo' href='/'>
        <Image className='img' height={150} width={150} src={logo} alt='logo' />
      </Link>

      <div className='links'>
        {
          links.map(link => (
            <Link className='' key={link.id} href={link.url}>{link.title}</Link>
          ))
        }
        <Btn text='Request a quote' path='/' ></Btn>
      </div>

    </nav>
  )
}

export default Navbar