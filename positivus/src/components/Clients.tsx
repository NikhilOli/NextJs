import Image from 'next/image'
import React from 'react'
import client from '../../public/assets/Company logo.png'
import client1 from '../../public/assets/Company logo (1).png'
import client2 from '../../public/assets/Company logo (2).png'
import client3 from '../../public/assets/Company logo (3).png'
import client4 from '../../public/assets/Company logo (4).png'
import client5 from '../../public/assets/Company logo (5).png'

const Clients = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 my-10 md:gap-20'>
        <Image alt='' src={client} />
        <Image alt='' src={client1} />
        <Image alt='' src={client2} />
        <Image alt='' src={client3} />
        <Image alt='' src={client4} />
        <Image alt='' src={client5} />
    </div>
  )
}

export default Clients