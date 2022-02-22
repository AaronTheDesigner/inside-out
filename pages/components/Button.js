import React from 'react'
import Link from 'next/link'

const Button = (props) => {
  const { name, href } = props;

  return (

    <Link href={href ?? ''} >
        <button className="bg-primary-dark uppercase font-semibold text-white font bold py-2 px-4 rounded md:text-lg md:py-2 md:px-6 box-shadow hover:bg-yellow-300 hover:text-blue-900 transition-all">          
          <a>{name}</a>
        </button>
    </Link>
  )
}

export default Button