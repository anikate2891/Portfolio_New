import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

import NavBar from './Navigation/NavBar'
import FullScreenNav from './Navigation/FullScreenNav'


const App = () => {
  
  return (
    <div className='text-white'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path='/menu' element={<FullScreenNav />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
