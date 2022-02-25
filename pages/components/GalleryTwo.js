import React from 'react'
import pic from '../../public/assets/house.jpg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const GalleryTwo = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
        })


  return (
    <div className='flex flex-col bg-primary-dark justify-center items-center py-4 sm:px-10 md:px-20 lg:px-20'>
        <div className='flex flex-col h-full mb-6 m:w-1/2'>
        <motion.h1 
            className="m-2 text-3xl header-shadow text-center uppercase font-bold text-gray-200 md:text-4xl lg:text-6xl"
            ref={ref}
            style={{

            }}
        >
            see the <motion.span ref={ref} style={{ color: inView ? '#EBD254' : 'text-gray-200', transition: '1s 1s' }}>results</motion.span>
        </motion.h1>
            <p className='text-white text-center p-4 text-xs sm:text-sm md:text-base lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati deleniti, soluta perspiciatis eos autem officia quia porro voluptatem temporibus dolor sit alias, debitis accusamus, voluptatibus corrupti quaerat magni nulla?
            </p>
        </div>
        <div className="image-mosaic m:w-1/2">
            <div className="card card-tall card-wide" style={{
                backgroundImage: `url('/assets/flooring_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-base sm:text-2xl'>Flooring</span>
            </div>
            <div className="card card-tall" style={{
                backgroundImage: `url('/assets/painting_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-base sm:text-2xl'>Painting</span>
            </div>
            <div className="card card-wide" style={{
                backgroundImage: `url('/assets/maintenance_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-base sm:text-2xl'>Maintenance</span>
            </div>
            <div className="card card-tall card-wide" style={{
                backgroundImage: `url('/assets/bathroom_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-base sm:text-2xl'>Bathroom Remodeling</span>
            </div>
            <div className="card card-wide" style={{
                backgroundImage: `url('/assets/deck_1.jpg')`
            }}>
                <span className='uppercase text-center whitespace-wrap text-base sm:text-2xl'>Deck Restoration</span>
            </div>
            {/* <div className="card card-tall">

            </div> */}
        </div>
    </div>
  )
}

export default GalleryTwo