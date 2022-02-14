import React from 'react'
import Button from './Button'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Services = () => {
const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0
    })
  return (
    <section id="services" className="services border-b-4 border-blue-900 py-4 sm:px-10 md:px-15 lg:px-20">
        <motion.h1 className="m-2 text-3xl text-center font-bold text-blue-900 md:text-4xl lg:text-6xl">
            Bring new life to your home
        </motion.h1>
        <div className="bg-slate-400 flex gap-7 flex-wrap justify-center my-6">
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Painting</h1>
                <p className='text-lg md:text-xl'>A fresh coat of paint can make the outside or inside of your home or office look like new.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Bathroom Remodeling</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Maintenance</h1>
                <p className='text-lg md:text-xl'>We know it&#59;s one of the things we don&#59;t want to deal with, but don&#59;t worry about it, we&#59;ve got you covered. Let us help you with the maintenance of your house, apartments, or neighborhood- from changing a light bulb to pressure washing you whole house.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Flooring</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Deck Restoration</h1>
                <p className='text-lg md:text-xl'>A deck takes a beating from the elements year-round. If your deck needs repairs or maintenance afters of long winter trust the deck restoration team at inside out to help. We provide deck maintenance such as wood  Repairs, staining, power washing, and additional solutions to improve the look, value, and safety of your investment.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
        </div>
    </section>
  )
}

export default Services