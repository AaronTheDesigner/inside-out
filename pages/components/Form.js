import React from 'react'
import Button from './Button'
import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Form = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
        })

    if (state.succeeded) { 
        return <p>Thanks for your submission</p>
    }

  return (
    <div id="form" className='p-2 mt-4  sm:px-10 md:px-15 lg:px-20'>
        
        <div className="p-3 sm:p-10 md:p-15 border-primary-dark border-3 lg:px-20 border-2 bg-gray-200 rounded-lg shadow-md">
        <motion.h1 
            className="m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl"
            ref={ref}
            style={{

            }}
        >
            get a free <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>estimate</motion.span>
        </motion.h1>
            <form action="" className='' onSubmit={handleSubmit}>
                <div className='flex flex-col lg:flex-row gap-3'>
                    <div className='flex flex-col lg:w-1/2'>
                        <label htmlFor="name" className='uppercase font-bold primary-dark'>Full Name</label>
                        <input type="text" name="name" id="name" placeholder='Full Name' className='rounded-md border-primary-dark border-2 active:border-white'/>
                        <label htmlFor="email" className='uppercase font-bold primary-dark'>Email</label>
                        <input type="email" name="email" id="email" placeholder='Email' className='rounded-md border-primary-dark border-2 active:border-white'/>
                        <label htmlFor="phone" className='uppercase font-bold primary-dark'>Phone Number</label>
                        <input type="tel" name="phone" id="phone" placeholder='Phone Number' className='rounded-md border-primary-dark border-2 active:border-white'/>
                        <label htmlFor="services" className='uppercase font-bold primary-dark'>Select Primary Service</label>
                        <select name="services" id="services" className='rounded-md border-primary-dark border-2 active:border-white'>
                            <option value="Painting">Painting</option>
                            <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                            <option value="Deck Restoration">Deck Restoration</option>
                            <option value="Flooring">Flooring</option>
                            <option value="Maintenance">Maintenance</option>
                        </select>
                    </div> 
                    <div className="flex flex-col lg:w-1/2" >
                        <label htmlFor="message" className='uppercase font-bold primary-dark'>Message</label>
                        <textarea name="message" id="message" cols="25" rows="10" className='rounded-md border-primary-dark border-2 active:border-white'></textarea>
                    </div>
                </div>             
                <button className='bg-primary-dark mt-4 font-bold uppercase text-yellow-200 py-2 px-4 rounded-md shadow-lg hover:bg-yellow-300 hover:text-blue-800'>
                    Submit    
                </button>
            </form>
        </div>
    </div>
  )
 }

export default Form