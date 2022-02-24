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
        "mobilenav transition-all duration-700 h-60 fixed top-0 left-0 z-10 justify-between flex flex-col w-full bg-white sm:invisible" 
        : 
        "mobilenav bg-white mobile-slide duration-700 transition-all h-60 fixed top-0 left-0 z-10 justify-between flex flex-col w-full sm:invisible"}>
        <div className="flex flex-col p-4">
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