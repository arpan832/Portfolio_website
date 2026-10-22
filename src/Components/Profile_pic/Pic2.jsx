import React from 'react'
import sidewaysFlowers from '../../assets/sidewaysflowers.jpg'

export default function Pic2() {
  return (
    <div className='pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-1/3 rotate-60 opacity-70 lg:block  '>
       <img src={sidewaysFlowers} alt='Decorative sideways flowers' className='h-full w-full object-contain object-right' />
    </div>
  )
}
