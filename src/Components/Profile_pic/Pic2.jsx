import React from 'react'
import sidewaysFlowers from '../../assets/sidewaysflowers.jpg'

export default function Pic2() {
  return (
    <div className='absolute h-32 w-full overflow-hidden  lg:relative lg:bottom-240 lg:right-200 lg:h-auto lg:w-auto lg:rotate-180 z-0'>
       <img src = {sidewaysFlowers} alt='Decorative sideways flowers' className='h-full w-full object-cover lg:h-auto lg:w-auto' ></img>
    </div>
  )
}
