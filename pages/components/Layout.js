import React from 'react'
import Nav from './Nav'
import Form from './Form'
import Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
        <Head>
          <title>Inside Out Home Improvements</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/x-icon" href='/assets/insideoutlogo.svg' />
        </Head>
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