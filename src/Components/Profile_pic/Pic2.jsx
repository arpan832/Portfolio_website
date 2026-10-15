import React from 'react'
import sidewaysFlowers from '../../assets/sidewaysflowers.jpg'

export default function Pic2() {
  return (
    <div className='pointer-events-none absolute z-0 h-32 w-full overflow-hidden lg:relative lg:bottom-140 lg:right-200 lg:h-auto lg:w-auto lg:rotate-180 opacity-70'>
       <img src = {sidewaysFlowers} alt='Decorative sideways flowers' className='h-full w-full object-cover lg:h-auto lg:w-auto hidden lg:block' ></img>
    </div>
  )
}
