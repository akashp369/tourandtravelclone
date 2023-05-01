import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
export default function Allroute() {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/services' element={<Services />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  )
}
