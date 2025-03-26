import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {ClientDisplay} from './components/ClientDisplay'
// import {Video} from './components/Video'

import { Services } from './components/Services'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { WhyUs } from './components/About/WhyUs'
import { Video } from './components/Video'
import { Team } from './components/Team'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'





function App() {

  return (
    <>
      <div className="overflow-hidden">
        <Hero/>
        <ClientDisplay/>
        <Projects/>
        <Video/>
        <Services/>
        <About/>
        <Pricing/>
        <WhyUs sectionWidth='w-11/12'/>
        <Testimonials/>
        <Team/>

      </div>
    </>
  )
}

export default App
