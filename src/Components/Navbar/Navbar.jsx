import React from 'react'
import Home from './Home'
import Hobby from './Hobby'
import WhoamI from './WhoamI'
const Navbar = () => {

  return (
    <nav aria-label='Main navigation' className='fixed left-0 right-0 top-0 z-20 flex w-full justify-end overflow-hidden px-3 py-2 lg:h-10 lg:w-screen lg:p-4'>
      <div className='flex max-w-full items-center gap-2 lg:gap-6'>
        <Home />
        <WhoamI />
        <Hobby />
      </div>
    </nav>
  )
}

export default Navbar
