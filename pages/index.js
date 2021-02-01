import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Landing/Header'

export default function Home() {
  return (
    <div className="bg-primary flex flex-col h-full w-full">
      <Head>
        <title>Rate My Solution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="sticky top-0"/>
      <Header/>

    </div>
  )
}
