import React from 'react'
import Nav from './Nav'
import Form from './Form'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
        <Nav />
        <main>
            {props.children}
        </main>
        <Form />
        <Footer />
    </div>
  )
}

export default Layout