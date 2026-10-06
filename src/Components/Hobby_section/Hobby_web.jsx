import React from 'react'

export default function Hobby_web({ onSwitch,onArt }) {


  return (
  
    <div className="responsive-copy  mx-auto grid w-full max-w-full wrap-break-word  grid-cols-1 gap-4 px-5 pb-12 pt-16 text-2xl leading-tight tracking-wide  lg:relative lg:grid-cols-3 lg:w-220 lg:max-w-none lg:px-0 lg:bottom-20">
      <button onClick={onSwitch}
        className="h-60 w-full cursor-pointer border-2 border-black bg-white p-6 text-white lg:col-span-2 lg:w-220 ">
        <img src='flower3.jpg' alt='My web hobby' className='h-full w-full object-cover'></img>
        </button>

      <button onClick={onArt}  className="h-48 border-2 border-black bg-white p-6 text-white lg:relative lg:top-64 lg:h-80 cursor-grab">2</button>
      <div className="h-48 border-2 border-black bg-white p-6 text-white lg:relative lg:bottom-20 lg:h-80 lg:w-148">3</div>
      <div className="h-32 border-2 border-black bg-white p-6 text-white lg:relative lg:right-75 lg:top-65 lg:h-40 lg:w-170">3</div>
      <div className="h-32 border-2 border-black bg-white p-6 text-white lg:relative lg:left-21 lg:top-65 lg:h-40 lg:w-50">3</div>
    </div>
  )
}

