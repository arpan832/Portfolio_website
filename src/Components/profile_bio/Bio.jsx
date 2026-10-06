import React from 'react'
import WhoamI from '../Navbar/WhoamI'

export default function Bio() {
  return (
    <div id= "whoami" className='responsive-copy relative z-10 w-full max-w-full break-words px-5 pt-16 text-2xl leading-tight tracking-wide text-slate-950 font-Parech sm:text-3xl lg:relative lg:left-90 lg:top-60 lg:w-200 lg:max-w-3xl lg:p-4 lg:text-6xl'>
    <div className='relative p-2 underline decoration-amber-800 font-display lg:left-40 lg:p-6'> Who am I? </div>
     "I'm <span >Arpan,</span> a <span className='font-serif underline decoration-amber-200'>17</span> year old  Builder and <span className='bg-gray-300  underline decoration-black' >Engineering enthusiast</span> from <span className='underline decoration-orange-300'>India</span>, building things across<span className='underline decoration-black' > software, electronics, <span className='underline decoration-black'>AI,</span></span><span className='underline decoration-black'><span className='bg-gray-300'>robotics,</span> and <span className='font-serif bg-gray-300'>3D</span> design</span> <span>while constantly learning, experimenting, and turning  </span><span className='bg-gray-300 underline decoration-black'>ideas into  reality</span>".
    </div>
  )
}
