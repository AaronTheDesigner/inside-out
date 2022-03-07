import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Layout from './components/Layout';

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
      <Layout>
          <div style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.75) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 1) 80%), url('/assets/bathroom_1.jpg')`,
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
                Bathroom <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Remodeling</motion.span>
              </h1>
              <p className='font-bold p-4 text-xs primary-dark drop-shadow-2xl text-center sm:text-sm md:text-base lg:text-lg lg:text-left lg:w-3/5'>
                You will have confidence knowing that your project is our priority and every team member is experienced, providing quality work for you while maintaining a safe environment for your family and pets. Our goal is to bring you complete satisfaction at the end of the project. 
              </p>
            </div>
            
            
          </div>
          <div className="p-5 mt-12 w-full xl:w-5/12 grid place-items-center ">
            <div className="image-mosaic w-full ">
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_1.jpg')`
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/bathroom_2.jpg')`
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/bathroom_3.jpg')`,
                    backgroundPosition: ``
                }}>
                </div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_4.jpg')`
                }}>
                </div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/bathroom_5.jpg')`
                }}>
                </div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_6.jpg')`
                }}></div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_8.JPG')`
                }}></div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/bathroom_9.JPG')`
                }}></div>
                <div className="card  card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_10.JPG')`
                }}></div>
                <div className="card card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_11.JPG')`
                }}></div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/bathroom_12.JPG')`
                }}></div>
                <div className="card  card-tall" style={{
                    backgroundImage: `url('/assets/bathroom_14.JPG')`
                }}></div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    )
}

export default Bathroom