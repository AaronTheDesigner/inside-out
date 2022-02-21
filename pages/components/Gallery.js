import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Gallery = () => {
const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })

  return (
    <div className='py-4 sm:px-10 md:px-15 lg:px-20 bg-primary-dark'>
        <motion.h1 
            className="m-2 text-3xl header-shadow text-center uppercase font-bold text-gray-200 md:text-4xl lg:text-6xl"
            ref={ref}
            style={{

            }}
        >
            see the <motion.span ref={ref} style={{ color: inView ? '#EBD254' : 'text-gray-200', transition: '1s 1s' }}>results</motion.span>
        </motion.h1>
        <p className='text-center text-xs sm:text-sm md:text-base lg:text-lg w-3/5 xl:w-2/5 font-semibold text-gray-200  mx-auto'>On every project, our number one goal is client satisfaction. We will listen closely to your vision for your home to help that vision come to fruition.</p>
        <div className="gallery h-60 lg:h-80 xl:h-96">
            <ul className=''>
                <li>
                    <span className='gal-label'>
                        Flooring 
                    </span>
                    <Image
                        src='/assets/flooring_1.jpg'
                        layout='fill'
                        className='gal-image'
                    />
                </li>
                <li>
                    <span className='gal-label'>
                        Painting
                    </span>
                    <Image
                        src='/assets/painting_1.jpg'
                        layout='fill'
                        className='gal-image'
                    />
                </li>
                <li>
                    <span className='gal-label'>
                        Maintenance
                    </span>
                    <Image
                        src='/assets/maintenance_1.jpg'
                        layout='fill'
                        className='gal-image'
                    />
                </li>
                <li>
                    <span className='gal-label'>
                        Bathroom Remodeling
                    </span>
                    <Image
                        src='/assets/bathroom_1.jpg'
                        layout='fill'
                        className='gal-image'
                    />
                </li>
                <li>
                    <span className='gal-label'>
                        Deck Restoration
                    </span>
                    <Image
                        src='/assets/deck_1.jpg'
                        layout='fill'
                        className='gal-image'
                    />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Gallery