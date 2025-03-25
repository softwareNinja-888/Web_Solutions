import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {ClientDisplay} from './components/ClientDisplay'
import {Video} from './components/Video'


function App() {

  return (
    <>
      <div className="overflow-hidden">
        <Hero/>
        <ClientDisplay/>
        <Video/>
      </div>
    </>
  )
}

export default App
