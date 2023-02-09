import React from 'react'
import About from '../About/About'
import Buyurtma from '../Buyurtma/Buyurtma'
import Faktlar from '../Faktlar/Faktlar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import HowUse from '../HowUse/HowUse'
import Mahsulot from '../Mahsulot/Mahsulot'
import MahsulotAbout from '../MahsulotAbout/MahsulotAbout'
import Question from '../Question/Question'

import './Home.scss'
function Home() {
  return (
    <div className='home' id='home'>
      <div className="heroo">
        <Header/>
        <Hero/>
      </div>
      <Buyurtma/>
      <Mahsulot/>
      <MahsulotAbout/>
      <About/>
      <Question/>
      <HowUse/>
      <Faktlar/>
      <Footer/>
    </div>
  )
}

export default Home