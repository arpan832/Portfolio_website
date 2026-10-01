import React from 'react'
import Bio from './Components/profile_bio/Bio'
import Pic from './Components/Profile_pic/Pic'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/profile_bio/Hero'
import Pic2 from './Components/Profile_pic/Pic2'
import Hobby_web from './Components/Hobby_section/Hobby_web'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bio />
      <Pic />
      <Pic2 />
      <Hobby_web />
      
    </div>
  )
}
