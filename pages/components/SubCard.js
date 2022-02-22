import React from 'react'
import Image from 'next/image'

const SubCard = (props) => {
  return (
    <div className="flex flex-col bg-primary-dark w-80 rounded-md shadow-lg">
        <div className=" w-full">
            <div className="">
                <Image 
                src={props.image}
                layout='responsive'
                width={180}
                height={200}
                />
            </div>
        </div>
        <div className="flex flex-col items-center">
            <h1 className="m-2 text-x2l header-shadow text-center uppercase font-bold text-gray-200 md:text-2xl lg:text-3xl">
                {props.name}
            </h1>
            <p className='px-4 my-3 text-center font-bold text-gray-200 text-sm sm:text-sm md:text-base'>
                {props.description}
            </p>
        </div>          
    </div>
  )
}

export default SubCard