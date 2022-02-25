import Head from 'next/head'
import Image from 'next/image'

//components
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import References from './components/References'
import Form from './components/Form'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import GalleryTwo from './components/GalleryTwo'


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero/>           
      <Services />
      <GalleryTwo />
      <References />      
      <Form />
      <Footer />
    </div>
  )
}
