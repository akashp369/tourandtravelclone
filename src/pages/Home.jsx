import React from 'react'
import Hero from '../components/Hero'
import Homeimg from '../assest/12.jpg'
import Destination from '../components/Destination'

export default function Home() {
  return (
    <>
      <Hero  
      cName='hero' heroImg={Homeimg}
      title='Your Journey Your Story'  
      text='Choose Your Favourite Destination'
      buttonText='Travel Plan'
      url='/'
      btnClass='show'
      />
      <Destination />
    </>
  )
}
