import React from 'react'

const Button = (props) => {
  const { name } = props;
  return (
        <button className="bg-primary-light text-white font bold py-2 px-4 rounded md:text-xl md:py-2 md:px-6 box-shadow">
            {name}
        </button>
  )
}

export default Button