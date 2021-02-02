import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="bg-primary flex flex-col h-full w-full">
      <Head>
        <title>Leetcode Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="sticky top-0"/>

    </div>
  )
}
