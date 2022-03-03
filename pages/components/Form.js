import React from 'react'
import Button from './Button'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

    if (state.succeeded) { 
        return <p>Thanks for your submission</p>
    }

    // return (
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="email">Email Address</label>
    //       <input id="email" type="email" name="email" />
    //       <ValidationError prefix="Email" field="email" errors={state.errors} />
    //       <textarea id="message" name="message" />
    //       <ValidationError prefix="Message" field="message" errors={state.errors} />
    //       <button type="submit" disabled={state.submitting}>
    //         Submit
    //       </button>
    //       <ValidationError errors={state.errors} />
    //     </form>
    //   );

  return (
    <div id="form" className='p-2 sm:px-10 md:px-15 lg:px-20'>
        <h1 className="m-10 text-3xl text-center font-bold text-blue-900 md:text-4xl lg:text-6xl">
            Get a Free Estimate
        </h1>
        <div className="p-3 sm:p-10 md:p-15 lg:p-20 border-2 border-blue-900 rounded-lg">
            <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" />
                <button>
                    Submit    
                </button>                

            </form>
        </div>
    </div>
  )
 }

export default Form