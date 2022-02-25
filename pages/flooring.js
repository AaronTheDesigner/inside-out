import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const floorTypes = () => {
  return (
    <ul>
      <li>Laminate</li>
      <li>Carpet</li>
      <li>Porcelain and Ceramic</li>
      <li>LPV and LVT</li>
      <li>Stairs</li>
      <li>Vinyl</li>
      <li>Engineer Hardwood</li>
    </ul>
  )
}

const subOne = {
  name: 'subservice',
  image: '/assets/logo.png',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit ea veritatis impedit ut, illum optio voluptatem doloremque nemo illo inventore. Maxime accusantium vitae illum aliquam doloremque harum nemo amet!'
}

const Flooring = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })

  return (
    <div className="flex flex-col py-4 sm:px-10 md:px-15 lg:px-20" style={{
      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.75) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 1) 80%), url('/assets/house.jpg');`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center'
    }}>
      <div className='flex flex-col items-center'>
        <h1 className='m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl'>
          <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Flooring</motion.span>
        </h1>
        <p className='p-4 text-xs text-center sm:text-sm md:text-base lg:text-lg'>
          Flooring should be functional but it also adds style and comfort to a room. You might want ceramic tile in your kitchen for easy clean ups, a hardwood style in your living room, and carpet in your bedroom for comfort or you may choose to use the same kind of flooring throughout your home. 
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-4 sm:px-10 md:px-15 lg:px-20">
        <SubCard 
          name={subOne.name}
          image={subOne.image}
          description={subOne.description}
        />        
        <SubCard 
          name={subOne.name}
          image={subOne.image}
          description={subOne.description}
        />       
      </div>
    </div>
  )
}

export default Flooring