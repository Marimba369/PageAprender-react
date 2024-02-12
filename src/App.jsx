import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Head'
import SectionText from './Components/Section'
import SectionImg from './Components/SectionImg'
import SectionCourse from './Components/SectionCourse'
import SectionRecomend from './Components/SectionRecomend'
import SectionLine from './Components/Section-line'
import SectionPrice from './Components/SectionPrice'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='container-geral'>
      
      <Header />
      
      <div className='container-app'>  
        <SectionText />
        <SectionImg />
      </div>
      
      <SectionCourse />
  
      <SectionRecomend />   

      <SectionLine />
  
      <SectionPrice />

      <Footer />

    </div>
    
  )
}

export default App
