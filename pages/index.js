import Head from 'next/head'
import Image from 'next/image'

//components
import styles from '../styles/Home.module.css'
import Hero from './components/Hero'
import Services from './components/Services'
import References from './components/References'
import Form from './components/Form'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services />
      <References />
      <Form />
      <Footer />
    </div>
  )
}
