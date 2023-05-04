import React from 'react'
import Hero from '../components/Hero'
import AboutImg from '../assest/night.jpg'
import Aboutus from '../components/Aboutus'

export default function About() {
  return (
    <>
      <Hero  
      cName='hero-mid' heroImg={AboutImg}
      title='About'  
      />
      <Aboutus />
    </>
  )
}

