import React from 'react'
import Hero from '../components/Hero'
import AboutImg from '../assest/9.jpg'
import Trip from '../components/Trip'

export default function Services() {
  return (
    <>
      <Hero  
      cName='hero-mid' heroImg={AboutImg}
      title='Service'  
      />
      <Trip />
    </>
  )
}

