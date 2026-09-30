import React from 'react'
import Home from './Home'
import Hobby from './Hobby'
const Navbar = () => {

  return (
    <div className='w-screen h-10 p-4 ` flex justify-end z-20 fixed'>
      <div className='flex items-center gap-6'>
        <Home />
        <Hobby />
      </div>
    </div>
  )
}

export default Navbar
