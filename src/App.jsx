import React from 'react'
import Bio from './Components/profile_bio/Bio'
import Pic from './Components/Profile_pic/Pic'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/profile_bio/Hero'
import Pic2 from './Components/Profile_pic/Pic2'
import Hobby_web from './Components/Hobby_section/Hobby_web'

export default function App() {
  return (
    <main id='home'>
      <Navbar />
      <Hero />
      <Bio id='whoami'/>
      <Pic />
      <Pic2 />
      <section id='hobbies' aria-label='Hobbies ' className='lg:-mt-310'>
        <Hobby_web />
      </section>
    </main>
  )
}
