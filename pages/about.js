import React from 'react'
import Layout from './components/Layout'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = {
  content: `Watching my dad work as a builder in the construction business, created a desire for me to be involved in home improvements and remodeling. When I was younger all I wanted to be was a soccer player. But things didn’t work out so I started working with my dad, even though I never really liked construction that much. I didn’t know that the experience was going to be good for me in the future. Later on, I moved here from Costa Rica and started working for a company for a little while. I then felt the desire to start my own company. That’s when Inside-Out became a reality. We started in 2014 just as a window cleaning and painting company and later grew into remodeling. Since then we have  gained a good reputation as an honest and responsible company- two of the character traits that my dad taught me. That is what you can count on when you hire us. We love to do everything with excellence, making sure that the job is done right the first time. We accomplish all of this through love for our job and love for our clients. We are a family company, and see our clients, not just as clients, but as people and families.`
}

const about = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })

  return (
    <Layout>
      <div style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.65) 10%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, .9) 80%), url('/assets/flooring_5.jpg')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
      }}>
        <div className="h-14 sm:h-12 lg:h-20"></div>
        <div className="flex flex-col gap-2 py-4 sm:px-10 md:px-15 lg:px-20">
        <motion.h1 
          className="m-2 text-3xl header-shadow text-center uppercase font-bold text-gray-200 md:text-4xl lg:text-6xl lg:text-left lg:w-full"
          ref={ref}
          style={{

          }}
        >
          <motion.span ref={ref} style={{ color: inView ? '#0C3759' : 'text-gray-200', transition: '1s 1s' }}>About</motion.span>
        </motion.h1>
        <div className='flex flex-col gap-5 px-4 items-start lg:flex-row'>
          <div className="w-3/5 lg:w-2/5">
            <Image 
              src='/assets/about.JPG'
              layout='responsive'
              width={300}
              height={430}
            />
          </div> 
          <div className='lg:w-7/12'>
            <p className='font-bold text-center primary-dark text-xs sm:text-sm md:text-base lg:text-lg lg:text-left'>
              {About.content}
            </p>
            <h1 className="text-base mt-4 text-center uppercase font-bold primary-dark md:text-xl lg:text-2xl lg:text-left lg:w-full">We treat others how we would want to be treated. </h1>
            <h1 className="text-base mt-4 text-center uppercase font-bold primary-dark md:text-xl lg:text-2xl lg:text-left lg:w-full">We have a number of skilled workers to acomplish every area of service that we offer.</h1>
            <h1 className="text-base mt-4 text-center uppercase font-bold primary-dark md:text-xl lg:text-2xl lg:text-left lg:w-full">It would be a pleasure for us to be able to serve your family, community, or neighborhood. </h1>
          </div>  
        </div>
        
            
        </div>
      </div>
    </Layout>    
  )
}

export default about