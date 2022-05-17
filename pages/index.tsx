import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
 
const Home: NextPage = () => {
  return (
    
    <div>
      <Head>
        <title>// Stephen Talley</title>
        <link rel="icon" href="/st2.svg" />
      </Head>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        

    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       <footer className="flex h-24 w-full items-center justify-center border-t">
          Powered by{' '}
          <Image src="/st.svg" alt="Vercel Logo" width={72} height={50} />
      </footer>
    </div>
    </div>
  )
}

export default Home
