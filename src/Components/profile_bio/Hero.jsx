import React from 'react'

const Hero = () => {
  return (
    <div className='responsive-copy relative z-10 w-full max-w-full break-words px-5 pt-24 text-2xl leading-tight tracking-wide text-slate-950 font-Parech sm:text-3xl lg:relative lg:left-6 lg:top-10 lg:w-300 lg:max-w-2xl lg:p-4 lg:text-6xl'>
      Hi, I’m <span className='bg-amber-200'>Ari</span>, and <span className='bg-pink-200'>welcome to</span><span className='bg-pink-300'> my personal space.</span>
        This is where I keep my ideas, projects, experiments, and the things I’m curious about. <span className='bg-amber-500'>Take a look around</span> <span className='bg-green-200'> and see what I’ve been up</span> to.
    </div>
  )
}

export default Hero
