import React, { useState } from 'react'

export default function Hobby_web({ onSwitch, onArt, onWeb }) {
  const [Hovered, setHovered] = useState(false)
  const [HoveredArt, setHoveredArt] = useState(false)
  const [HoveredWeb, setHoveredWeb] = useState(false)


  return (

    <div className="responsive-copy mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 gap-4 overflow-x-clip px-5 pb-12 pt-16 text-2xl leading-tight tracking-wide lg:relative lg:grid-cols-3 lg:gap-6 lg:bottom-20 ">
      <button onClick={onSwitch}
        className="box-border h-60 min-w-0 w-full cursor-pointer overflow-hidden border-2 border-black bg-white p-4 text-white lg:col-span-2 lg:h-80"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <img src={Hovered ? 'https://i.pinimg.com/1200x/a7/48/c3/a748c37ffa80a812c77ee26dc4763ba6.jpg' : 'Cad.png'}
          alt='Cad images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>
      </button>

      <button
        onClick={onArt}
        className="box-border h-48 min-w-0 w-full cursor-grab overflow-hidden border-2 border-black bg-white p-4 text-white lg:h-80"
        onMouseEnter={() => setHoveredArt(true)}
        onMouseLeave={() => setHoveredArt(false)}>

        <img src={HoveredArt ? 'https://i.pinimg.com/736x/bc/90/9f/bc909fa4473246bb1f8116d1814ed3d7.jpg' : 'https://i.pinimg.com/736x/b2/51/08/b251089622842fd8541b27ecae7504de.jpg'} alt='Art images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>
      </button>

      <div className="box-border h-48 min-w-0 w-full overflow-hidden border-2 border-black bg-white p-4 text-white lg:h-80 ">
        <button
          onClick={onWeb}
          className=" h-full min-w-0 w-full cursor-grab overflow-hidden  border-black bg-white p-4 text-white"
          onMouseEnter={() => setHoveredWeb(true)}
          onMouseLeave={() => setHoveredWeb(false)}

        >
          {/* <div className='font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque provident ipsum, quisquam aliquam dicta illum voluptatum dolorum, voluptate omnis possimus amet cupiditate tempore error voluptatem animi impedit, eius sapiente.</div> */}
          <img src={HoveredWeb ? 'https://i.pinimg.com/736x/b2/51/08/b251089622842fd8541b27ecae7504de.jpg' : 'https://i.pinimg.com/736x/09/38/b9/0938b920e4a03727f94560adb6981f1e.jpg'} alt='Art images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>

        </button>
      </div>

      <div className="box-border h-32 min-w-0 w-full border-2 border-black bg-white p-4 text-white lg:h-40">3

      </div>

      <div className="box-border h-32 min-w-0 w-full border-2 border-black bg-white p-4 text-white lg:h-40">3

      </div>


    </div>




  )
}



