import React from 'react'
import Image from 'next/image';
import SubCard from './components/SubCard';
import Layout from './components/Layout';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const subOne = {
  name: 'interior painting',
  image: '/assets/painting_interior.jpg',
  description: `When we paint, we make sure that we cover all the aspects of painting- we don’t just come and start rolling the paint on. We make sure to fill in holes, cracks, and caulk or other things that the job might need. We make sure to leave things the way they were when we came - except for an exceptional painting job.`
}

const subTwo = {
  name: 'exterior painting',
  image: '/assets/painting_8.jpg',
  description: `Just like the interior painting, we make sure to take care of our surroundings. We take time to prepare the wood to be painted by caulking,  and  scraping old paint as necessary. You don’t need to hire another company to replace the wood or siding if it is rotten-we do that as well. 
  `
}

const Painting = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
    })

    return (
      <Layout>
          <div style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.75) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 1) 80%), url('/assets/painting_1.jpg')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
      }}>
        <div className="h-14 sm:h-12 lg:h-20"></div>
        <div className="flex flex-col flex-wrap py-4 sm:px-10 md:px-15 lg:px-20 xl:flex-row" style={{
          
        }}>
          <div className="flex flex-col xl:w-7/12">
            <div className='flex flex-col lg:items-start'>
              <h1 className='m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl lg:pl-2'>
                <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Painting</motion.span>
              </h1>
              <p className='font-bold p-4 text-xs primary-dark drop-shadow-2xl text-center sm:text-sm md:text-base lg:text-lg lg:text-left lg:w-3/5'>
                We have built a team of skilled house painters who are committed to providing excellent painting services for every customer. On every project, our number one goal is client satisfaction. We take great care and focus on preparation of the areas where we are going to paint.
              </p>
            </div>
            {/* service present */}
            <motion.div 
                className="flex flex-col gap-x-7 p-3 lg:flex-row m:h-1/2"
                ref={ref}
                style={{
                    opacity: inView ? "1" : "0",
                    transition: "1s .5s"
                }}
            >
              <div className='invisible h-0 lg:visible lg:h-full lg:w-1/5'>
                <Image 
                    src={subOne.image}
                    layout='responsive'
                    width={180}
                    height={200}
                    className='rounded-md'
                />
              </div>
              <div className="flex flex-col md:w-4/5 justify-center">
                <h1 className='text-base uppercase primary-dark sm:text-lg md:text-xl lg:text-2xl font-bold mb-3'>{subOne.name}</h1>
                <p className='primary-dark font-bold text-xs sm:text-sm md:text-base lg:text-lg'>{subOne.description}</p>
              </div>              
            </motion.div>
            {/* service present */}
            <motion.div 
                className="flex flex-col gap-x-7 p-3 lg:flex-row m:h-1/2"
                ref={ref}
                style={{
                    opacity: inView ? "1" : "0",
                    transition: "1s .5s"
                }}
            >
              <div className='invisible h-0 lg:visible lg:h-full lg:w-1/5'>
                <Image 
                    src={subTwo.image}
                    layout='responsive'
                    width={180}
                    height={200}
                    className='rounded-md'
                />
              </div>
              <div className="flex flex-col lg:w-4/5 justify-center">
                <h1 className='text-base uppercase primary-dark text-left sm:text-lg md:text-xl lg:text-2xl font-bold mb-3'>{subTwo.name}</h1>
                <p className='primary-dark font-bold text-xs text-left sm:text-sm md:text-base lg:text-lg'>{subTwo.description}</p>
              </div>              
            </motion.div>
          </div>
          <div className="p-5 mt-12 w-full xl:w-5/12 grid place-items-center ">
            <div className="image-mosaic w-full ">
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/painting_1.jpg')`
                }}>
                </div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/painting_2.jpg')`
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/painting_3.jpg')`,
                    backgroundPosition: ``
                }}>
                </div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/painting_4.jpg')`
                }}>
                </div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/painting_5.jpg')`
                }}>
                </div>
                <div className="card card-tall card-wide" style={{
                    backgroundImage: `url('/assets/painting_6.jpg')`
                }}></div>
                <div className="card card-wide" style={{
                    backgroundImage: `url('/assets/painting_7.jpg')`
                }}></div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/painting_8.jpg')`
                }}></div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/painting_9.jpg')`
                }}></div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/painting_10.jpg')`
                }}></div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/painting_11.jpg')`
                }}></div>
                <div className="card card-tall" style={{
                    backgroundImage: `url('/assets/painting_12.jpg')`
                }}></div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/painting_13.jpg')`
                }}></div>
                <div className="card card-wide card-tall" style={{
                    backgroundImage: `url('/assets/painting_14.jpg')`
                }}></div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
      
    )

  // return (
  //   <div className="flex flex-col py-4 sm:px-10 md:px-15 lg:px-20" style={{
  //     backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.75) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 1) 80%), url('/assets/house.jpg')`,
  //     backgroundSize: 'cover',
  //     backgroundAttachment: 'fixed',
  //     backgroundPosition: 'center'
  //   }}>
  //     <div className='flex flex-col items-center'>
  //       <h1 className='m-2 text-3xl header-shadow text-center uppercase font-bold primary-dark md:text-4xl lg:text-6xl'>
  //         <motion.span ref={ref} style={{ color: inView ? '#EBD254' : '#0C3759', transition: '1s 1s' }}>Painting</motion.span>
  //       </h1>
  //       <p className='p-4 text-xs text-center sm:text-sm md:text-base lg:text-lg w-2/5'>
  //         We have built a team of skilled house painters who are committed to providing excellent painting services for every customer. On every project, our number one goal is client satisfaction. We take great care and focus on preparation of the areas where we are going to paint.
  //       </p>
  //     </div>
  //     <div className="flex flex-wrap justify-center gap-10 px-4 sm:px-10 md:px-15 lg:px-20">
  //       <SubCard 
  //         name={subOne.name}
  //         image={subOne.image}
  //         description={subOne.description}
  //       />        
  //       <SubCard 
  //         name={subTwo.name}
  //         image={subTwo.image}
  //         description={subTwo.description}
  //       />            
  //     </div>
  //   </div>
  // )
}

export default Painting