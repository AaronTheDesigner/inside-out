import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const References = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0
        })
  return (
    <div className=' bg-slate-400 py-4 sm:px-10 md:px-15 lg:px-20'>
        <motion.h1 
            className="m-2 text-3xl text-center font-bold md:text-4xl lg:text-6xl"
            ref={ref}
            style={{
                color: inView ? 'black' : 'blue',
                transition: '2s 2s'
            }}
            >
            You are in good company
        </motion.h1>
        <div className="flex flex-col w-full my-6 gap-5 items-center h-full">
            <div className="flex justify-center w-1/12 items-center gap-5">
                <div className="flex flex-col justify-center items-center">
                    <div className='w-full text-center'>
                        <Image 
                            src='/assets/person.png'
                            layout='responsive'
                            width={90}
                            height={120}
                            objectFit='contain'
                            className='rounded-full'                    
                        />
                    </div>                    
                    <span className="name">
                        <p className='uppercase font-bold'>Customer Name</p>
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-full text-center'>
                        <Image 
                            src='/assets/person.png'
                            layout='responsive'
                            width={90}
                            height={120}
                            objectFit='contain'
                            className='rounded-full'                    
                        />
                    </div>                    
                    <span className="name">
                        <p className='uppercase font-bold'>Customer Name</p>
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-full text-center'>
                        <Image 
                            src='/assets/person.png'
                            layout='responsive'
                            width={90}
                            height={120}
                            objectFit='contain'
                            className='rounded-full'                    
                        />
                    </div>                    
                    <span className="name">
                        <p className='uppercase font-bold'>Customer Name</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                    <div className='text-center w-3/5'>
                        <span className='font-bold text-3xl'>
                            Customer Name
                        </span>
                        <Image 
                            src='/assets/person.png'
                            layout='responsive'
                            width={90}
                            height={120}
                            objectFit='contain'                   
                        />
                        <span className="italic">
                            this will be a quote from the customer. it will be shortened a bit for readability
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default References