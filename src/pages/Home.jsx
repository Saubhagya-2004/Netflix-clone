import React from 'react'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'
import MoiveRow from '../components/MoiveRow'

const Home = () => {
  return (
   <>
   <Hero/>
   <MoiveRow/>
   <Outlet/>
   
   </>
  )
}

export default Home
