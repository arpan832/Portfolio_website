import React, { useState } from 'react'

export default function Hobby_web({ onSwitch, onArt, onWeb, onHardware, onContact }) {
  const [Hovered, setHovered] = useState(false)
  const [HoveredArt, setHoveredArt] = useState(false)
  const [HoveredWeb, setHoveredWeb] = useState(false)
  const [HoveredHardware, setHoveredHardware] = useState(false)
  const [HoveredContact, setHoveredContact] = useState(false)
  
  return (

    <div className="responsive-copy mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 gap-4 overflow-x-clip px-5 pb-12 pt-16 text-2xl leading-tight tracking-wide lg:relative lg:grid-cols-3 lg:gap-6 lg:bottom-20 ">
      <button onClick={onSwitch}
        className="box-border h-60 min-w-0 w-full cursor-pointer overflow-hidden border-2 border-black bg-white p-4 text-white lg:col-span-2 lg:h-80"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <img src={Hovered ? 'Cad.png' : 'https://i.pinimg.com/736x/49/88/6c/49886c63dff7cd10ba5a520e57fc9abf.jpg'}
          alt='Cad images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>
      </button>

      <button
        onClick={onArt}
        className="box-border h-48 min-w-0 w-full cursor-grab overflow-hidden border-2 border-black bg-white p-4 text-white lg:h-80"
        onMouseEnter={() => setHoveredArt(true)}
        onMouseLeave={() => setHoveredArt(false)}>

        <img src={HoveredArt ? 'https://i.pinimg.com/736x/3f/a1/ca/3fa1ca8e4f298fd7181ec491ba1a7b00.jpg' : 'https://i.pinimg.com/736x/b2/51/08/b251089622842fd8541b27ecae7504de.jpg'} alt='Art images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>
      </button>

      <div className="box-border h-48 min-w-0 w-full overflow-hidden border-2 border-black bg-white p-4 text-white lg:h-80 ">
        <button
          onClick={onWeb}
          className=" h-full min-w-0 w-full cursor-grab overflow-hidden  border-black bg-white p-4 text-white"
          onMouseEnter={() => setHoveredWeb(true)}
          onMouseLeave={() => setHoveredWeb(false)}

        >
          {/* <div className='font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque provident ipsum, quisquam aliquam dicta illum voluptatum dolorum, voluptate omnis possimus amet cupiditate tempore error voluptatem animi impedit, eius sapiente.</div> */}
          <img src={HoveredWeb ? 'https://i.pinimg.com/1200x/8d/e3/9d/8de39d0353e7b2895f8a1118e44245d1.jpg' : 'https://i.pinimg.com/736x/14/a0/76/14a0769ec2f5941fd56f82cfb6d4242a.jpg'} alt='Art images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>

        </button>
      </div>

      <div className="box-border  min-w-0 w-full border-2 border-black bg-white p-4 text-white lg:h-48">
        <button
          onClick={onHardware}
          className=" h-full min-w-0 w-full cursor-grab overflow-hidden  border-black bg-white p-4 text-white"
          onMouseEnter={() => setHoveredHardware(true)}
          onMouseLeave={() => setHoveredHardware(false)}

        >
          {/* <div className='font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque provident ipsum, quisquam aliquam dicta illum voluptatum dolorum, voluptate omnis possimus amet cupiditate tempore error voluptatem animi impedit, eius sapiente.</div> */}
          <img src={HoveredHardware ? 'https://i.pinimg.com/736x/0a/f5/29/0af529a629cf6ce3682824697662a28b.jpg' : 'harDware.png'} alt='Art images' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>

        </button>
      </div>

      <div className="box-border min-w-0 w-full border-2 border-black bg-white p-4 text-white lg:h-48">
          <button
          onClick={onContact}
          className="h-full min-w-0 w-full cursor-grab overflow-hidden border-black bg-white p-4 text-white "
          onMouseEnter={() => setHoveredContact(true)}
          onMouseLeave={() => setHoveredContact(false)}
        >
          {/* <div className='font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque provident ipsum, quisquam aliquam dicta illum voluptatum dolorum, voluptate omnis possimus amet cupiditate tempore error voluptatem animi impedit, eius sapiente.</div> */}
          <img src={HoveredContact ? 'https://i.pinimg.com/736x/3f/c3/98/3fc398d6ce6028869542b1f294f79e19.jpg' : 'https://i.pinimg.com/736x/9b/68/79/9b6879279e992ff1716e4a72c2040628.jpg'} alt='Contact' className='block h-full min-h-0 w-full min-w-0 object-cover'></img>
        </button>
      </div>

    </div>




  )
}



