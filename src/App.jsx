import React, { useState } from 'react'
import Bio from './Components/profile_bio/Bio'
import Pic from './Components/Profile_pic/Pic'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/profile_bio/Hero'
import Pic2 from './Components/Profile_pic/Pic2'
import Hobby_web from './Components/Hobby_section/Hobby_web'
import Hobby_cad from './Components/Hobby_section/Hobby_cad'
import Hobby_art from './Components/Hobby_section/Hobby_art'
import Hobby_websites from './Components/Hobby_section/Hobby_websites'
import Hobby_Hardware from './Components/Hobby_section/Hobby_Hardware'
import Hobby_Contact from './Components/Hobby_section/Hobby_Contact'
import { BrowserRouter, Route, useNavigate,Navigate,Routes} from 'react-router-dom'
import Hobby_gaming from './Components/Hobby_section/Hobby_gaming'

function Homepage() {

 const navigate = useNavigate()

  return (
    
        <main id='home'>
          <Navbar />
          <Hero />
          <Bio id='whoami' />
          <Pic />
          <Pic2 />
          <section id='hobbies' aria-label='Hobbies ' className='lg:-mt-310'>
            <Hobby_web onSwitch={() => navigate('/cad')}
              onArt={() => navigate('/art')}
              onWeb={()=> navigate('/web')}
              onHardware ={() => navigate('/hardware')}
              onContact={()=>navigate('/Contact')}
              onGaming={()=>navigate('/gaming')}
            />
          </section>
        </main>
      )}
    
function CadPage(){
  const navigate = useNavigate()
  
  return (
    <Hobby_cad
     onBack={() => navigate('/')}
     ></Hobby_cad>
  )
}

function ArtPage() {
  const navigate = useNavigate()
  return (
    <Hobby_art
     onArt = {() => navigate('/')}
     ></Hobby_art>
  )
}

function WebPage() { 
  const navigate = useNavigate()
  return (
    <Hobby_websites 
     onWeb = {() => navigate('/')}
     ></Hobby_websites>
  )
}

function HardwarePage () {
  const navigate = useNavigate()

  return (
    <Hobby_Hardware
     OnHardware={()=> navigate('/')}
     ></Hobby_Hardware>
  )
}

function ContactPage () {
  const navigate = useNavigate () 
  return (
    <Hobby_Contact
     onContact={() => navigate('/')}
     ></Hobby_Contact>
  )
}
function GamingPage () {
  const navigate = useNavigate ()
  return (
    <Hobby_gaming 
     onGaming={() => navigate('/')}
     ></Hobby_gaming>
  )
}

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Homepage/>} />
        <Route path="/cad" element={<CadPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/web" element={<WebPage />} />
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gaming" element = {<GamingPage/>}/>
                
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
  )
}



  
