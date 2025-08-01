'use client'

import { links } from '@/app/utils/navlinks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../ModeToogle'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='logo' href='/'>Portfolio</Link>

      <div className='links'>
        <ModeToggle />
        {
          links.map(link => (
            <Link className='' key={link.id} href={link.url}>{link.title}</Link>
          ))
        }
        <Button className='btn' variant={'destructive'} >Logout</Button>
      </div>

    </nav>
  )
}

export default Navbar