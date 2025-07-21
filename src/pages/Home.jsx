import React from 'react'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <Hero/>
   <Outlet/>\
   
   </>
  )
}

export default Home
