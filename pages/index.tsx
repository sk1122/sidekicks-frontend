import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import { Features } from '../components/Features'
import HowCard from '../components/HowCard'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white space-y-20">
      <Head>
        <title>SideKicks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero></Hero>
      <Features></Features>
      <div className='w-full flex flex-col justify-start items-center pt-20 min-h-screen space-y-20'>
        <h1 className='text-6xl font-black text-center md:text-left'>How Sidekicks Works?</h1>
        <div className='w-full space-y-20'>
          <HowCard id='01' title='Build the projects.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et dolore magna.' img='/code.png'></HowCard>
          <HowCard id='02' title='Share with community.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et dolore magna.' img='/people.png'></HowCard>
          <HowCard id='03' title='Get Incentivized' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et dolore magna.' img='/coins.png'></HowCard>
        </div>
      </div>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default Home
