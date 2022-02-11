import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-4 mt-20 sm:px-10 md:px-15 lg:px-20 flex flex-col items-center gap-y-4'>
        <div className="flex justify-evenly w-full md:text-base">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
        </div>
        <div className='text-center w-2/12 sm:w-14 md:w-20 lg:w-32'>
            <Image 
                src='/assets/logo.png'
                layout='responsive'
                width={90}
                height={120}
                objectFit='contain'
                className='rounded-full'                    
            />
        </div>  
        <div className="text-sm text-center w-full mb-3">
           2022 &copy; Inside Out Home Improvement 
           <br />
           Built by Upgrades By AT &copy; 2022
        </div>  
    </div>
  )
}

export default Footer