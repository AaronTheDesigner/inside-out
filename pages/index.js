import Head from 'next/head'
import Image from 'next/image'

//components
import styles from '../styles/Home.module.css'
import Hero from './components/Hero'
import Services from './components/Services'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services />
    </div>
  )
}
