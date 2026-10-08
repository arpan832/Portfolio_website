import React from 'react'

export default function Hobby_Hardware({OnHardware}) {
    return (
        <div className=''>
            <button onClick={OnHardware}
                className='font-Bold cursor-grab bg-green-200 rounded-4xl px-4 lg:relative lg:top-3'
            >
                Go Back
            </button>
            <div className=''>
                <h1 className='flex justify-center tracking-wide font-display text-4xl underline decoration-amber-800 p-6 md:relative sm:top-10 '> My CAD Projects  </h1>
                <div className='grid lg:grid-cols-3 p-6 gap-3 lg:h-140 m-8 cursor-grab  md:grid-cols-4'>

                    <button className=" border bg-white p-4 shadow-sm cursor-grab overflow-hidden">
                        <img src='https://i.pinimg.com/736x/95/e0/85/95e0856dc20b7f464b723cdb4b8a0649.jpg'></img>
                        <div className='flex-wrap'>
                            <a href='https://github.com/arpan832/Portfolio_website' className='m-20 bg-gray-300 p-6 rounded-1xl  font-display hover:bg-amber-100 lg:relative lg:right-17'>github</a>
                            <a className='bg-gray-300 p-6 rounded-1xl font-display hover:bg-amber-100'>Onshape</a>
                        </div>
                    </button>
                    <button className=" border bg-white p-4 shadow-sm cursor-grab overflow-hidden ">
                        <img className='bg-cover' src='https://i.pinimg.com/736x/33/19/dd/3319dd65e46c5f9f56f94587c0aa6b6f.jpg'></img>

                        <a href='https://github.com/arpan832/Portfolio_website' className='m-20 bg-gray-300 p-6 rounded-1xl  font-display hover:bg-amber-100 lg:relative lg:right-17'>github</a>
                        <a className='bg-gray-300 p-6 rounded-1xl font-display hover:bg-amber-100'>Onshape</a>
                    </button>
                    <button className=" border bg-white p-4 shadow-sm cursor-grab overflow-hidden">
                        <img src="https://i.pinimg.com/1200x/48/03/91/480391f1ae85e08cb2fc14beb3b2557c.jpg"></img>

                        <a href='https://github.com/arpan832/Portfolio_website' className='m-20 bg-gray-300 p-6 rounded-1xl  font-display hover:bg-amber-100 lg:relative lg:right-17'>github</a>
                        <a className='bg-gray-300 p-6 rounded-1xl font-display hover:bg-amber-100'>Onshape</a>
                    </button>


                </div>
            </div>
        </div >
    )
}
