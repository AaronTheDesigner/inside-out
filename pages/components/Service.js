import React from 'react'
import Button from './Button'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Service = (props) => {

    const { title, description, link } = props;

    console.log(link)

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
        })
  return (
    <motion.div 
        className="service flex flex-col max-w-xl p-3"
        ref={ref}
        style={{
            opacity: inView ? "1" : "0",
            transition: "1s .5s"
        }}
    >
        <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-shadow-light mb-3'>{title}</h1>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-shadow-light'>{description}</p>
        <div className='mt-6'>
            <Button name={link}/>
        </div>
    </motion.div>
  )
}

export default Service