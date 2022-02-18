import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const References = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
        })
  return (
    <section id="references" className='py-4 text-gray-200 bg-primary-dark px-3 sm:px-10 md:px-15 lg:px-20'>
        <h1 className="m-2 header-shadow text-3xl text-center font-bold uppercase md:text-4xl lg:text-6xl">
            Hear from <motion.span ref={ref} style={{ color: inView ? '#EBD254' : 'white', transition: '1s 0s' }}>others</motion.span>
        </h1>
        <div className="flex flex-col my-6 gap-5 items-center py-4">
            <motion.div className="quote bg-primary-light box-shadow p-4 text-xs sm:text-sm md:text-base lg:text-lg rounded-lg border-2"
              ref={ref}
              style={{
                  transform: inView ? 'translate(0, 0)' : 'translate(-100%, 0)',
                  opacity: inView ? '1' : '0',
                  transition: '1.5s .6s'
              }}  
            >
                <p>Over the past three weeks we have had rather extensive repair, updating, painting and flooring done in our 1985 home. The results are beyond stunning. Thanks to Mr. Obed Arguedas of Inside Out Home Improvements, our home has been updated and modernized to a monumental degree with exquisite workmanship and attention to detail.</p>
                <motion.p className="name ml-5" ref={ref} style={{ color: inView ? '#EBD254' : 'white', transition: '1s 2s' }}>- Scott Foppiano</motion.p>
            </motion.div>
        
        
            <motion.div className="quote bg-primary-light box-shadow p-4 text-xs sm:text-sm md:text-base lg:text-lg rounded-lg border-2"
              ref={ref}
              style={{
                  transform: inView ? 'translate(0, 0)' : 'translate(-100%, 0)',
                  opacity: inView ? '1' : '0',
                  transition: '1.5s .2s'
              }}  
            >
                <p>Obed did an awesome job on my back deck! He pressure washed, sanded peeling parts, replaced some rotted boards, and re-stained it all in two days. He was on time, reasonably priced, and very communicative. We plan to use him again for some pressure washing, and would highly recommend his work! </p>
                <motion.p className="name ml-5" ref={ref} style={{ color: inView ? '#EBD254' : 'white', transition: '1s 2s' }}>- Annie Murray</motion.p>
            </motion.div>
        
        
            <motion.div className="quote bg-primary-light box-shadow p-4 text-xs sm:text-sm md:text-base lg:text-lg rounded-lg border-2"
              ref={ref}
              style={{
                  transform: inView ? 'translate(0, 0)' : 'translate(-100%, 0)',
                  opacity: inView ? '1' : '0',
                  transition: '1.5s .5s'
              }}  
            >
                <p>Obed (Inside Out Home Improvements), I just wanted to say a well deserved thank you for the absolutely fantastic job your guy(s) did on my new floors! Ron was great. He went above and beyond ALL my expectations. He was timely, courteous and most of all, meticulously detailed. You communicated well from the beginning and throughout the whole process, very reasonable, very respectful and overall wonderful to work with. I have and will not hesitate to recommend you to anyone who asks. Thank you!!!</p>
                <motion.p className="name ml-5" ref={ref} style={{ color: inView ? '#EBD254' : 'white', transition: '1s 2s' }}>- Robin Kuehner</motion.p>
            </motion.div>
        </div>
    </section>
  )
}

export default References