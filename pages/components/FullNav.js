import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FullNav = () => {
  return (
    <div className="fullnav flex primary-dark justify-between w-0 -translate-y-full invisible sm:w-full sm:translate-y-0 sm:visible sm:py-1 lg:py-3 px-4 sm:px-10 md:px-15 lg:px-36">
        <div className="flex items-center w-0 sm:w-8/12 lg:justify-between sm:gap-x-5 lg:gap-x-0">
            <div className="sm:h-10 md:h-10 lg:h-14 lg:w-16">
                <Image 
                    src='/assets/logo.png'
                    layout='responsive'
                    // sizes="10vh"
                    width={80}
                    height={80}
                    objectFit='contain'
                    className=''
                />
            </div>
            <div className="w-0 sm:w-11/12">
                <ul className='flex gap-x-10 justify-evenly uppercase tracking-wider navlinks sm:text-xs md:font-bold md:text-xs lg:text-base'>
                    <li>
                        <Link href="/">
                            <a className="navlink linkone">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" >
                            <a className="navlink linktwo">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#services" >
                            <a className="navlink linkthree">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#references" >
                            <a className="navlink linkfour">Tesimonials</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex items-center w-0 sm:w-2/12 mr-10 md:mr-5 lg:mr-0">
            <ul className='flex items-center w-full lg:gap-x-5 sm:text-xs lg:text-base justify-between'>
                <li className='cta-call'>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 md:h-7 lg:h-10'>
                        <path d="M66.7369 11.0607L57.6897 2.02185C57.0515 1.38083 56.2929 0.87223 55.4576 0.525259C54.6222 0.178287 53.7266 -0.000216793 52.822 1.97593e-07C50.9786 1.97593e-07 49.2456 0.722088 47.9459 2.02185L38.2106 11.7573C37.5696 12.3955 37.061 13.1541 36.714 13.9894C36.3671 14.8248 36.1886 15.7205 36.1888 16.625C36.1888 18.4684 36.9109 20.2015 38.2106 21.5012L45.3294 28.6201C43.6631 32.2931 41.3463 35.6345 38.4909 38.483C35.6427 41.3454 32.3017 43.6706 28.6282 45.3471L21.5094 38.2282C20.8712 37.5871 20.1126 37.0785 19.2773 36.7316C18.4419 36.3846 17.5463 36.2061 16.6417 36.2063C14.7983 36.2063 13.0653 36.9284 11.7656 38.2282L2.02182 47.9551C1.38003 48.5945 0.870997 49.3545 0.524015 50.1913C0.177033 51.0282 -0.00105269 51.9254 4.68107e-06 52.8313C4.68107e-06 54.6748 0.722081 56.4078 2.02182 57.7075L11.052 66.7379C13.1248 68.8192 15.9876 70 18.9269 70C19.547 70 20.1417 69.949 20.7278 69.8471C32.1791 67.9612 43.537 61.8701 52.7031 52.7124C61.8607 43.5631 67.9432 32.2136 69.8545 20.7282C70.4322 17.2197 69.2684 13.6092 66.7369 11.0607V11.0607Z" fill="#0C3759"/>
                    </svg>                
                </li>
                <li className='cta-contact whitespace-nowrap text-white hover:text-blue-900 hover:bg-white bg-primary-dark hover:border-2 hover:border-blue-900 py-1 px-2 rounded-md shadow transition-all'>
                    <a href="#form">
                        Free Estimate
                    </a>                    
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default FullNav