import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import { useRequireAuth } from '../hooks/useRequireAuth';

export default function Home() {
  const auth = useRequireAuth()
  if (!auth.user) return null;

  return (
    <>
    <div className="bg-primary flex flex-col h-full w-full">
      <Head>
        <title>Leetcode Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="sticky top-0"/>
      
    </div>
    <h1>
      Hello {auth.user.name}
    </h1>
    <button
      onClick={() => auth.signOut()}
      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      >
      Sign out
    </button>
    </>
  )
}
