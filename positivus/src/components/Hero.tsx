import Image from 'next/image'
import React from 'react'
import illustration from '../../public/assets/Illustration.png'
import Btn from './Button'


const Hero = () => {
  return (
    <div className='my-4 relative'>
        <h1 className='text-3xl md:w-1/3 md:my-6 md:text-5xl font-bold tracking-wide md:pt-4'>Navigating the digital landscape for success</h1>

        <div className='md:absolute md:right-4 md:top-0 md:w-1/2 flex justify-end'>
            <Image src={illustration} alt='illustration' height={450}  />
        </div>

        <p className='md:w-1/3 md:my-6 md:tracking-wider'>
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>

        <Btn path='/contact' text='Book a Consultation' className='bg-black text-white w-full my-4 md:my-6 md:w-1/4' />
    </div>
  )
}

export default Hero