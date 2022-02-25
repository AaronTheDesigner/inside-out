import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const subOne = {
  name: 'repairs',
  image: '/assets/logo.png',
  description: `We offer deck restoration starting with the necessary repairs that your deck might need. We change boards and railings, making your deck  sturdy and firm. We offer complete restoration if necessary. `
}

const subTwo = {
  name: 'staining',
  image: '/assets/logo.png',
  description: `Wood stains tend to peel for two reasons: over application or poor adhesion. We know and implement the preparation and staining processes well so that your new wood stain will last as long as possible. `
}

const Deck = () => {
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
          Deck <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Restoration</motion.span>
        </h1>
        <p className='p-4 text-xs text-center sm:text-sm md:text-base lg:text-lg'>
        We provide deck maintenance such as wood Repairs, staining, power washing, and additional solutions to improve the look, value, and safety of your investment.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-4 sm:px-10 md:px-15 lg:px-20">
        <SubCard 
          name={subOne.name}
          image={subOne.image}
          description={subOne.description}
        />        
        <SubCard 
          name={subTwo.name}
          image={subTwo.image}
          description={subTwo.description}
        />   
      </div>
    </div>
  )
}

export default Deck