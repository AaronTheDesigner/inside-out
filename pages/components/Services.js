import React from 'react'
import Button from './Button'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Services = () => {
const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })
  return (
    <section id="services" className="services border-b-4 border-blue-900 py-4 sm:px-10 md:px-15 lg:px-20">
        <h1 className="m-2 text-3xl text-center font-bold text-blue-900 md:text-4xl lg:text-6xl">
            Bring new life to your home
        </h1>
        <div className="bg-slate-400 flex gap-7 flex-wrap justify-center my-6">
            <motion.div 
                className="service flex flex-col max-w-xl p-3 text-blue-900"
                ref={ref}
                style={{
                    opacity: inView ? "1" : "0",
                    transition: "1s 1s"
                }}
            >
                <h1 className=' text-2xl md:text-3xl font-bold'>Painting</h1>
                <p className='text-lg md:text-xl'>A fresh coat of paint can make the outside or inside of your home or office look like new. We have built a team of skilled house painters who are committed to providing excellent painting services for every customer. On every project, our number one goal is client satisfaction. We will listen closely to your vision for your home to help that vision come to fruition.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </motion.div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Bathroom Remodeling</h1>
                <p className='text-lg md:text-xl'>We know that remodeling a bathroom or anything in your home can be stressful, but with Inside-Out we make sure to keep you informed every step of the way. You will have confidence knowing that your project is our priority and every team member is experienced, providing quality work for you while maintaining a safe environment for your family and pets. Our goal is to bring you complete satisfaction at the end of the project. </p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Maintenance</h1>
                <p className='text-lg md:text-xl'>We know it&#39;s one of the things you don&#39;t want to deal with, but don&#39;t worry about it, we&#39;ve got you covered. Let us help you with the maintenance of your house, apartments, or neighborhood- from changing a light bulb to pressure washing your whole house.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Flooring</h1>
                <p className='text-lg md:text-xl'>Flooring is something that is often taken for granted. We walk all over it every day and that’s why it’s one of the most important parts of your home. Flooring should be functional but it also adds style and comfort to a room. You might want ceramic tile in your kitchen for easy clean ups, a hardwood style in your living room, and carpet in your bedroom for comfort or you may choose to use the same kind of flooring throughout your home. Whatever your preference, we are ready to get the job done just right. </p>
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