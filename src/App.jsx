import React from 'react'
import Bio from './Components/profile_bio/Bio'
import Pic from './Components/Profile_pic/Pic'
import Navbar from "./Components/Navbar/Navbar"

export default function App() {
  return (
    <div>
      <Navbar />
      <Bio />
      <Pic />
    </div>
  )
}
