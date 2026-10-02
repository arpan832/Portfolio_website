import React, { useEffect, useState } from 'react'

export default function App() {
 
  const [title, settitle] = useState('')
  const Submithandler = (e) =>{
    e.preventDefault()
    console.log("aije lund")
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        Submithandler (e)
      }}>
         <input type="text" placeholder='Tor naam de lund' value={title} onChange={(e)=>{
          settitle(e.target.value)
         }}/>
         <button>submit</button>
      </form>
    </div>
  )
}


