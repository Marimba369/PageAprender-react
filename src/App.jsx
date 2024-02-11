import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Head'
import SectionText from './Components/Section'
import SectionImg from './Components/SectionImg'
import SectionCourse from './Components/SectionCourse'

function App() {

  return (
    <div className='container-geral'>
      
      <Header />
      
      <div className='container-app'>  
        <SectionText />
        <SectionImg />
      </div>
      
      <div className='container-course'>
        <SectionCourse />
      </div>

    </div>
    
  )
}

export default App
