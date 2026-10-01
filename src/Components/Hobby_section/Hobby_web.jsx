import React from 'react'

export default function Hobby_web() {
  
  function click(){
       alert("you clicked a button")
    }
  return (
    <div  className="grid grid-cols-3 w-220 h-120 gap-4 relative bottom-300 left-80">
      <button onClick={click} className="bg-white p-6  text-white border-2 border-black col-span-2 h-60 w-220 cursor-pointer "><img src='flower3.jpg' alt='my pic' className='w-full h-full object-cover'></img></button>
      <div className="bg-white p-6  text-white border-2 border-black h-80 relative top-64">2</div>
      <div className=" bg-white p-6  text-white h-80 border-2 border-black relative bottom-20 w-148 ">3</div>
      <div className=" bg-white p-6  text-white h-40 border-2 border-black relative top-65 w-170 right-75">3</div>
      <div className=" bg-white p-6  text-white h-40 border-2 border-black relative top-65 w-50 left-21 ">3</div>
    </div>
  )
}
