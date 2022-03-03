import React from 'react'
import Button from './Button'
import Service from './Service'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const painting = {
    title: 'Painting',
    description: 'A fresh coat of paint can make the outside or inside of your home or office look like new. On every project, our number one goal is client satisfaction. We will listen closely to your vision for your home to help that vision come to fruition.',
    link: 'More',
    href: '/painting'
}

const bathroom = {
    title: 'Bathroom Remodeling',
    description: 'We know that remodeling a bathroom or anything in your home can be stressful, but with Inside-Out we make sure to keep you informed every step of the way. Our goal is to bring you complete satisfaction at the end of the project.',
    link: 'More',
    href: '/bathroom'
}

const maintenance = {
    title: 'Maintenance',
    description: `We know it's one of the things you don't want to deal with, but don't worry about it, we've got you covered. Let us help you with the maintenance of your house, apartments, or neighborhood- from changing a light bulb to pressure washing your whole house.`,
    link: 'More',
    href: '/maintenance'
}

const flooring = {
    title: 'Flooring',
    description: `Flooring is something that is often taken for granted. We walk all over it every day and that's why it's one of the most important parts of your home. Whatever your preference, we are ready to get the job done just right.`,
    link: 'More',
    href: '/flooring'
}

const deckRestoration = {
    title: 'Deck Restoration',
    description: `A deck takes a beating from the elements year-round. If your deck needs repairs or maintenance afters of long winter trust the deck restoration team at inside out to help.`,
    link: 'More',
    href: '/deck'
}


const Services = () => {
const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })
  return (
    <section 
        id="services" 
        className="services border-b-4 border-primary-dark primary-dark py-4 sm:px-10 md:px-15 lg:px-20"
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
                link={painting.link}
                href={painting.href}
            />    
            <Service 
                title={bathroom.title}
                description={bathroom.description}
                link={bathroom.link}
                href={bathroom.href}
            />
            <Service 
                title={deckRestoration.title}
                description={deckRestoration.description}
                link={deckRestoration.link}
                href={deckRestoration.href}                
            />   
            <Service 
                title={flooring.title}
                description={flooring.description}
                link={flooring.link}
                href={flooring.href}
            />         
            <Service 
                title={maintenance.title}
                description={maintenance.description}
                link={maintenance.link}
                href={maintenance.href}
            />
        </div>
    </section>
  )
}

export default Services