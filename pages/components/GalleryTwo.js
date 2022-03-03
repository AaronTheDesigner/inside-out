import React from 'react'
import pic from '../../public/assets/house.jpg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const GalleryTwo = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
        })


  return (
    <div className='flex flex-col lg:flex-row bg-gray-100 justify-center items-center py-4 px-10 sm:px-10 md:px-20 lg:px-20'>
        <div className='w-1/5'>
            <Image
                src='/assets/logo.png'
                height={150}
                width={130}
            />
        </div>
        <div className='flex flex-col h-full mb-6 lg:w-1/2'>
        <motion.h1 
            className="primary-dark m-2 text-3xl header-shadow text-center uppercase font-bold text-gray-200 md:text-4xl lg:text-6xl lg:text-left lg:w-full"
            ref={ref}
            style={{

            }}
        >
            about <motion.span ref={ref} style={{ color: inView ? '#EBD254' : 'text-gray-200', transition: '1s 1s' }}>us</motion.span>
        </motion.h1>
            <p className='primary-dark text-center p-4 text-xs sm:text-sm md:text-base lg:text-lg lg:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati deleniti, soluta perspiciatis eos autem officia quia porro voluptatem temporibus dolor sit alias, debitis accusamus, voluptatibus corrupti quaerat magni nulla?
            </p>
        </div>
        <div className="image-mosaic w-full lg:w-1/2">
            <div className="card card-wide" style={{
                backgroundImage: `url('/assets/flooring_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-xs sm:text-2xl'>Flooring</span>
            </div>
            <div className="card card-tall card-wide" style={{
                backgroundImage: `url('/assets/painting_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-xs sm:text-2xl'>Painting</span>
            </div>
            <div className="card card-wide" style={{
                backgroundImage: `url('/assets/maintenance_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-xs sm:text-2xl'>Maintenance</span>
            </div>
            <div className="card card-tall card-wide" style={{
                backgroundImage: `url('/assets/bathroom_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-xs sm:text-2xl'>Bathroom Remodeling</span>
            </div>
            <div className="card card-wide" style={{
                backgroundImage: `url('/assets/deck_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-xs sm:text-2xl'>Deck Restoration</span>
            </div>
            {/* <div className="card card-tall">

            </div> */}
        </div>
    </div>
  )
}

export default GalleryTwo