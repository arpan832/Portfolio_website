import React from 'react'

export default function Hobby_art({onArt}) {
  return (
    <div className='flex justify-center font-extrabold'>
       Hi this is the art page
       <button 
          onClick={onArt}
          className='font-bold'>
           Go Back 
       </button>
    </div>

  )
}
