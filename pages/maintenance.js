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
          <div className="flex flex-col xl:w-7/12">
            <div className='flex flex-col lg:items-start'>
              <h1 className='m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl lg:pl-2'>
                <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Maintenance</motion.span>
              </h1>
              <p className='font-bold p-4 text-xs primary-dark drop-shadow-2xl text-center sm:text-sm md:text-base lg:text-lg lg:text-left lg:w-3/5'>
                {subOne.description}
              </p>
            </div>
            
          </div>
          <div className="p-5 mt-12 w-full xl:w-5/12 grid place-items-center ">
            <div className="image-mosaic w-full ">
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/flooring_1.jpg')`
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/flooring_2.jpg')`
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/flooring_3.jpg')`,
                    backgroundPosition: ``
                }}>
                </div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/flooring_4.jpg')`
                }}>
                </div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/flooring_5.jpg')`
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/flooring_6.jpg')`
                }}></div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/flooring_7.jpg')`
                }}></div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/flooring_8.jpg')`
                }}></div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
      
    )
}

export default Maintenance