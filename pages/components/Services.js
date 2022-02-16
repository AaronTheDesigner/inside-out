import React from 'react'
import Button from './Button'
import Service from './Service'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const painting = {
    title: 'Painting',
    description: 'A fresh coat of paint can make the outside or inside of your home or office look like new. We have built a team of skilled house painters who are committed to providing excellent painting services for every customer. On every project, our number one goal is client satisfaction. We will listen closely to your vision for your home to help that vision come to fruition.'
}

const bathroom = {
    title: 'Bathroom Remodeling',
    description: 'We know that remodeling a bathroom or anything in your home can be stressful, but with Inside-Out we make sure to keep you informed every step of the way. You will have confidence knowing that your project is our priority and every team member is experienced, providing quality work for you while maintaining a safe environment for your family and pets. Our goal is to bring you complete satisfaction at the end of the project.'
}

const maintenance = {
    title: 'Maintenance',
    description: `We know it's one of the things you don't want to deal with, but don't worry about it, we've got you covered. Let us help you with the maintenance of your house, apartments, or neighborhood- from changing a light bulb to pressure washing your whole house.`
}

const flooring = {
    title: 'Flooring',
    description: `Flooring is something that is often taken for granted. We walk all over it every day and that's why it's one of the most important parts of your home. Flooring should be functional but it also adds style and comfort to a room. You might want ceramic tile in your kitchen for easy clean ups, a hardwood style in your living room, and carpet in your bedroom for comfort or you may choose to use the same kind of flooring throughout your home. Whatever your preference, we are ready to get the job done just right.`
}

const deckRestoration = {
    title: 'Deck Restoration',
    description: `A deck takes a beating from the elements year-round. If your deck needs repairs or maintenance afters of long winter trust the deck restoration team at inside out to help. We provide deck maintenance such as wood  Repairs, staining, power washing, and additional solutions to improve the look, value, and safety of your investment.`
}


const Services = () => {
const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })
  return (
    <section 
        id="services" 
        className="services border-b-4 border-blue-900 primary-dark py-4 sm:px-10 md:px-15 lg:px-20"
        ref={ref}
        style={{
            
        }}
    >
        <motion.h1 
            className="m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl"
            ref={ref}
            style={{

            }}
        >
            Bring new <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>life</motion.span> to your home
        </motion.h1>
        
        <div className="flex gap-7 flex-wrap justify-center my-6">
            <Service 
                title={painting.title}
                description={painting.description}
            />    
            <Service 
                title={bathroom.title}
                description={bathroom.description}
            />    
            <Service 
                title={maintenance.title}
                description={maintenance.description}
            />    
            <Service 
                title={flooring.title}
                description={flooring.description}
            />    
            <Service 
                title={deckRestoration.title}
                description={deckRestoration.description}
            />    
        </div>
    </section>
  )
}

export default Services