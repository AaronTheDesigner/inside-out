import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1
  })
  return (
    <div className="hero grid place-items-center border-b-4 border-blue-900">
        <div className="h-14 sm:h-12 lg:h-20"></div>
        <div className="flex flex-col h-full items-center">
          <div className=" mt-48 moto">
            <motion.h1 
              className="m-2 text-3xl header-shadow text-center uppercase font-bold text-gray-200 md:text-4xl lg:text-6xl lg:text-left lg:w-full"
              ref={ref}
              style={{

              }}
            >
                 <motion.span ref={ref} style={{ color: inView ? '#EBD254' : 'text-gray-200', transition: '1s 1s' }}>precise painting</motion.span>
            </motion.h1>
            <motion.h1 
              className="m-2 text-3xl header-shadow text-center uppercase font-bold text-gray-200 md:text-4xl lg:text-6xl lg:text-left lg:w-full"
              ref={ref}
              style={{

              }}
            >
                 <motion.span ref={ref} style={{ color: inView ? '#EBD254' : 'text-gray-200', transition: '1s 1s' }}>home improvement</motion.span>
            </motion.h1>
          </div>
          <div className='topcta mt-6'>
              <Button 
                name='Contact'
                href='#form'
              />           
          </div>
          <div className=' mb-36 topscroll mt-24'>
              <a href="#services">
                <svg width="72" height="82" viewBox="0 0 72 90" fill="none">
                  <path  className='drop-shadow-lg hover:fill-blue-900' fillRule="evenodd" clipRule="evenodd" d="M35.8775 0C37.2366 0 38.54 0.539895 39.501 1.50091C40.462 2.46193 41.0019 3.76535 41.0019 5.12443V64.496L62.9959 42.4918C63.4724 42.0153 64.038 41.6374 64.6605 41.3795C65.283 41.1217 65.9502 40.9889 66.624 40.9889C67.2978 40.9889 67.965 41.1217 68.5875 41.3795C69.2101 41.6374 69.7757 42.0153 70.2521 42.4918C70.7286 42.9682 71.1065 43.5338 71.3644 44.1563C71.6222 44.7788 71.7549 45.446 71.7549 46.1199C71.7549 46.7937 71.6222 47.4609 71.3644 48.0834C71.1065 48.7059 70.7286 49.2715 70.2521 49.7479L39.5056 80.4945C39.0296 80.9717 38.4641 81.3503 37.8415 81.6087C37.2189 81.867 36.5515 82 35.8775 82C35.2034 82 34.536 81.867 33.9134 81.6087C33.2909 81.3503 32.7254 80.9717 32.2494 80.4945L1.50281 49.7479C1.02636 49.2715 0.648419 48.7059 0.390567 48.0834C0.132715 47.4609 0 46.7937 0 46.1199C0 45.446 0.132715 44.7788 0.390567 44.1563C0.648419 43.5338 1.02636 42.9682 1.50281 42.4918C2.46504 41.5295 3.7701 40.9889 5.1309 40.9889C5.8047 40.9889 6.47191 41.1217 7.09442 41.3795C7.71693 41.6374 8.28255 42.0153 8.759 42.4918L30.753 64.496V5.12443C30.753 3.76535 31.2929 2.46193 32.254 1.50091C33.215 0.539895 34.5184 0 35.8775 0Z" fill="#EBD254"/>
                </svg>
              </a>
          </div>       
        </div>
      </div>
  )
}

export default Hero





