import React from 'react'
import Hero from './hero/Hero'
import LayoutCard from '../frontWrite/Layoutcard'
import HAbout from './HAbout'
import Faq from '../faq/Faq'

const Home = () => {
  return (
    <>
      <Hero />
      <LayoutCard />
      <HAbout />
      <Faq />
    </>
  )
}

export default Home
