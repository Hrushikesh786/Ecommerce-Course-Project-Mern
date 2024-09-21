import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import Course from '../components/Course'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
    <Banner></Banner>
    <Course></Course>
    <Footer></Footer>
    </div>
    </>
  )
}

export default Home
