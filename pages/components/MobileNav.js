import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const MobileNav = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }
    
  return (
    <div className={ menu? 
        "mobilenav transition-all duration-700 h-64 fixed top-0 left-0 z-10 justify-between flex flex-col w-full bg-white sm:invisible" 
        : 
        "mobilenav bg-white mobile-slide duration-700 transition-all h-64 fixed top-0 left-0 z-10 justify-between flex flex-col w-full sm:invisible"}>
        <div className="flex flex-col p-4">
            <ul className='flex items-center w-full lg:gap-x-5 sm:text-xs lg:text-base justify-between'>
                <li className='cta-call'>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 md:h-7 lg:h-10'>
                        <a href="tel:9802534262">
                            <path d="M66.7369 11.0607L57.6897 2.02185C57.0515 1.38083 56.2929 0.87223 55.4576 0.525259C54.6222 0.178287 53.7266 -0.000216793 52.822 1.97593e-07C50.9786 1.97593e-07 49.2456 0.722088 47.9459 2.02185L38.2106 11.7573C37.5696 12.3955 37.061 13.1541 36.714 13.9894C36.3671 14.8248 36.1886 15.7205 36.1888 16.625C36.1888 18.4684 36.9109 20.2015 38.2106 21.5012L45.3294 28.6201C43.6631 32.2931 41.3463 35.6345 38.4909 38.483C35.6427 41.3454 32.3017 43.6706 28.6282 45.3471L21.5094 38.2282C20.8712 37.5871 20.1126 37.0785 19.2773 36.7316C18.4419 36.3846 17.5463 36.2061 16.6417 36.2063C14.7983 36.2063 13.0653 36.9284 11.7656 38.2282L2.02182 47.9551C1.38003 48.5945 0.870997 49.3545 0.524015 50.1913C0.177033 51.0282 -0.00105269 51.9254 4.68107e-06 52.8313C4.68107e-06 54.6748 0.722081 56.4078 2.02182 57.7075L11.052 66.7379C13.1248 68.8192 15.9876 70 18.9269 70C19.547 70 20.1417 69.949 20.7278 69.8471C32.1791 67.9612 43.537 61.8701 52.7031 52.7124C61.8607 43.5631 67.9432 32.2136 69.8545 20.7282C70.4322 17.2197 69.2684 13.6092 66.7369 11.0607V11.0607Z" fill="#0C3759"/>
                        </a>
                    </svg>                
                </li>
                <li className='cta-contact whitespace-nowrap text-white text-sm hover:text-blue-900 hover:bg-white bg-primary-dark hover:border-2 hover:border-blue-900 py-1 px-1 rounded-md shadow transition-all'>
                    <a href="#form">
                        Free Estimate
                    </a>                    
                </li>
            </ul>
            <ul className='primary-dark text-lg w-full justify-center items-center gap-y-2 font-bold flex flex-col '>
                <li>
                    <Link href="/">
                        <a className="navlink">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" >
                        <a className="navlink">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#services" >
                        <a className="navlink">Services</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#references" >
                        <a className="navlink">Tesimonials</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="w-full flex items-center justify-between px-2 py-1" id="bottom">
            <div className="ml-3 mb-1 grid place-items-center h-10 md:h-10 lg:h-14 lg:w-1/12">
                <svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-full'>
                    <path d="M31.9489 21.709H56.1153V47.7186C54.1226 55.6999 51.5768 59.3688 44.9537 64.717C39.7316 67.7671 36.8814 69.6659 31.9489 73.421V21.709Z" fill="#0C3759"/>
                    <path d="M31.9489 21.709H7.78245V47.7186C9.77514 55.6999 12.3209 59.3688 18.9441 64.717C24.1661 67.7671 27.0163 69.6659 31.9489 73.421V21.709Z" fill="#214E85"/>
                    <path d="M31.9489 2.7648V0L64 26.8288L31.9489 2.7648Z" fill="#0C3759"/>
                    <path d="M32.0511 2.7648V0L-4.95911e-05 26.8288L32.0511 2.7648Z" fill="#214E85"/>
                    <path d="M18.8608 50.563V36.4894H20.7232V50.563H18.8608Z" fill="white"/>
                    <path d="M37.2287 43.7086C37.2287 41.3726 37.8559 39.5454 39.1103 38.227C40.3647 36.9022 41.9839 36.2398 43.9679 36.2398C45.2671 36.2398 46.4383 36.5502 47.4815 37.171C48.5247 37.7918 49.3183 38.659 49.8623 39.7726C50.4127 40.8798 50.6879 42.1374 50.6879 43.5454C50.6879 44.9726 50.3999 46.2494 49.8239 47.3758C49.2479 48.5022 48.4319 49.3566 47.3759 49.939C46.3199 50.515 45.1807 50.803 43.9583 50.803C42.6335 50.803 41.4495 50.483 40.4063 49.843C39.3631 49.203 38.5727 48.3294 38.0351 47.2222C37.4975 46.115 37.2287 44.9438 37.2287 43.7086ZM39.1487 43.7374C39.1487 45.4334 39.6031 46.771 40.5119 47.7502C41.4271 48.723 42.5727 49.2094 43.9487 49.2094C45.3503 49.2094 46.5023 48.7166 47.4047 47.731C48.3135 46.7454 48.7679 45.347 48.7679 43.5358C48.7679 42.3902 48.5727 41.3918 48.1823 40.5406C47.7983 39.683 47.2319 39.0206 46.4831 38.5534C45.7407 38.0798 44.9055 37.843 43.9775 37.843C42.6591 37.843 41.5231 38.2974 40.5695 39.2062C39.6223 40.1086 39.1487 41.619 39.1487 43.7374Z" fill="white"/>
                </svg>
            </div>
            <div className="mr-6 mt-1 grid place-items-center md:h-10 lg:h-14 lg:w-1/12">
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-8 w-full' onClick={toggleMenu}>
                    <path d="M5.375 21.5H37.625" stroke="#0C3759" strokeWidth={2} strokeLinecap="round" strokeLinejoin='round'/>
                    <path d="M5.375 10.75H37.625" stroke="#0C3759" strokeWidth={2} strokeLinecap="round" strokeLinejoin='round'/>
                    <path d="M5.375 32.25H37.625" stroke="#0C3759" strokeWidth={2} strokeLinecap="round" strokeLinejoin='round'/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default MobileNav