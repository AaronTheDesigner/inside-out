import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const subOne = {
  name: 'interior painting',
  image: '/assets/painting_interior.jpg',
  description: `When we paint, we make sure that we cover all the aspects of painting- we don’t just come and start rolling the paint on. We make sure to fill in holes, cracks, and caulk or other things that the job might need. We make sure to leave things the way they were when we came - except for an exceptional painting job.`
}

const subTwo = {
  name: 'exterior painting',
  image: '/assets/painting_exterior.jpg',
  description: `Just like the interior painting, we make sure to take care of our surroundings. We take time to prepare the wood to be painted by caulking,  and  scraping old paint as necessary. You don’t need to hire another company to replace the wood or siding if it is rotten-we do that as well. 
  `
}

const Painting = () => {
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
          <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Painting</motion.span>
        </h1>
        <p className='p-4 text-xs text-center sm:text-sm md:text-base lg:text-lg w-2/5'>
          We have built a team of skilled house painters who are committed to providing excellent painting services for every customer. On every project, our number one goal is client satisfaction. We take great care and focus on preparation of the areas where we are going to paint.
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

export default Painting