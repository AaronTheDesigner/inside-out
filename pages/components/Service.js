import React from 'react'
import Button from './Button'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Service = (props) => {

    const { title, description } = props;

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
            transition: "1s 1s"
        }}
    >
        <h1 className=' text-2xl md:text-3xl font-bold text-shadow-light'>{title}</h1>
        <p className='text-lg md:text-xl text-shadow-light'>{description}</p>
        <div className='mt-6'>
            <Button/>
        </div>
    </motion.div>
  )
}

export default Service