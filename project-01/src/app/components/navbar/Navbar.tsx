'use client'

import { links } from '@/app/utils/navlinks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='logo' href='/'>Portfolio</Link>

      <div className='links'>
        {
          links.map(link => (
            <Link className='' key={link.id} href={link.url}>{link.title}</Link>
          ))
        }
        <Button className='bg-[#7B2CBF]' variant={'destructive'} >Logout</Button>
      </div>

    </nav>
  )
}

export default Navbar