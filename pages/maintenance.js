import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Layout from './components/Layout';

const subOne = {
  name: 'subservice',
  image: '/assets/logo.png',
  description: `We know it’s one of the things we don’t want to deal with, but don’t worry about it, we’ve got you covered.
  Let us help you with the maintenance of your house, apartments, or neighborhood- from changing a light bulb to pressure washing you whole house.`
}

const maintenanceTypes = () => {
  return (
    <ul className='uppercase font-bold primary-dark pl-4 flex flex-wrap'>
      <li className='m-5'>Gutter Cleaning</li>
      <li className='m-5'>Pressure Washing</li>
      <li className='m-5'>Window Cleaning</li>
      <li className='m-5'>Light Bulbs</li>
      <li className='m-5'>Ceiling Fans</li>
      <li className='m-5'>Sheetrock and Drywall</li>
      <li className='m-5'>Plumbing</li>
      <li className='m-5'>Wood Repairs</li>
      <li className='m-5'>Gutter Cleaning</li>
      <li className='m-5'>Ladder Work</li>
      <li className='m-5'>Door Replacement</li>
      <li className='m-5'>Toilet Replacement</li>
    </ul>
  )
}

const Maintenance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })

    return (
      <Layout>
          <div style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.75) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 1) 80%), url('/assets/house.jpg')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
      }}>
        <div className="h-14 sm:h-12 lg:h-20"></div>
        <div className="flex flex-col flex-wrap py-4 sm:px-10 md:px-15 lg:px-20 xl:flex-row" style={{
          
        }}>
          <div className="flex flex-col w-full items-center">
            <div className='flex flex-col items-center'>
              <h1 className='m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl lg:pl-2'>
                <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Maintenance</motion.span>
              </h1>
              <p className='font-bold p-4 text-xs primary-dark drop-shadow-2xl text-center sm:text-sm md:text-base lg:text-lg lg:text-left lg:w-3/5'>
                {subOne.description}
              </p>
            </div>
            <div className=" lg:w-3/5">
              {maintenanceTypes()}
            </div>
            
          </div>
          
        </div>
      </div>
      </Layout>
      
    )
}

export default Maintenance