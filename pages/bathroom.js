import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const subOne = {
  name: 'subservice',
  image: '/assets/logo.png',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit ea veritatis impedit ut, illum optio voluptatem doloremque nemo illo inventore. Maxime accusantium vitae illum aliquam doloremque harum nemo amet!'
}

const Bathroom = () => {
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
          Bathroom <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Remodeling</motion.span>
        </h1>
        <p className='p-4 text-xs text-center sm:text-sm md:text-base lg:text-lg'>
        You will have confidence knowing that your project is our priority and every team member is experienced, providing quality work for you while maintaining a safe environment for your family and pets.
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
        <SubCard 
          name={subOne.name}
          image={subOne.image}
          description={subOne.description}
        />        
      </div>
    </div>
  )
}

export default Bathroom