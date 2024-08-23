/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'
import BestCabs from '../components/BestCabs/BestCabs'
import About from '../components/About/About'
import DownloadApp from '../components/DownloadApp.jsx/DownloadApp'
import Reviews from '../components/Reviews/Reviews'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <Contact/>
        <BestCabs/>
        <About/>
        <DownloadApp/>
        <Reviews/>
        <Footer/>
    </>
  )
}

export default HomePage