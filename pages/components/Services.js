import React from 'react'
import Button from './Button'

const Services = () => {
  return (
    <section id="services" className="services border-b-4 border-blue-900 py-4 sm:px-10 md:px-15 lg:px-20">
        <h1 className="m-2 text-3xl text-center font-bold text-blue-900 md:text-4xl lg:text-6xl">Bring new life to your home</h1>
        <div className="bg-slate-400 flex gap-7 flex-wrap justify-center my-6">
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Service</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Service</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Service</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Service</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
            <div className="service flex flex-col max-w-xl p-3 text-blue-900">
                <h1 className=' text-2xl md:text-3xl font-bold'>Service</h1>
                <p className='text-lg md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo consectetur, quis quibusdam magnam quisquam id, ipsum eaque commodi laudantium nisi neque aspernatur sed ab quam! Veniam molestiae ad corporis.</p>
                <div className='mt-6'>
                    <Button/>
                </div>
            </div>            
        </div>
    </section>
  )
}

export default Services