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

export default function App() {
  const [web, setweb] = useState('profile');

  return (
    <div>
      {web === 'profile' && (
        <main id='home'>
          <Navbar />
          <Hero />
          <Bio id='whoami' />
          <Pic />
          <Pic2 />
          <section id='hobbies' aria-label='Hobbies ' className='lg:-mt-310'>
            <Hobby_web onSwitch={() => setweb('cadprojects')}
              onArt={() => setweb('artProjects')}
              onWeb={()=> setweb('webProjects')}
              onHardware ={() => setweb('HardwareProjects')}
              onContact={()=>setweb('Contact')}
            />
          </section>
        </main>
      )}
      {web === 'cadprojects' && (
        <Hobby_cad onBack={() => setweb('profile')}></Hobby_cad>
         )}
      {web ==='artProjects' && (
         <Hobby_art onArt={()=> setweb('profile')}></Hobby_art>
      )}   
      {web === 'webProjects' && (
        <Hobby_websites onWeb={()=> setweb('profile')}></Hobby_websites>
      )}
      { web === 'HardwareProjects' && (
         <Hobby_Hardware OnHardware={() => setweb ('profile')}></Hobby_Hardware>
      )

      }
      {web === 'Contact' && (
         <Hobby_Contact onContact={() => setweb('profile')}></Hobby_Contact>
      )}
    </div>

  )
}

