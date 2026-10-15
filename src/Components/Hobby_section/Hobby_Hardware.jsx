import React from 'react'

export default function Hobby_Hardware({ OnHardware }) {
    const Cads = [
    {
      title: 'KHOGU',
      Desription:'A Portable Music player that runs offline :still Ongoing ',
      image: 'https://i.pinimg.com/1200x/a1/96/99/a1969995df9d6347f33be7b762660399.jpg',
    }
  ]
  return (
    <main className='min-h-screen w-screen bg-cover bg-center overflow-hidden bg-no-repeat p-6'
    style={{backgroundImage:"url('https://i.pinimg.com/1200x/11/54/f8/1154f8209e31d18f27ec9e7faa603450.jpg')"}}
    >
      <button
        onClick={OnHardware} // Back button 
        className='rounded-lg bg-green-200 px-4 py-2 font-bold'
      >
        Go Back
      </button>
      <h1 className='p-6 text-center font-display text-4xl underline'>
        Hardware Projects
      </h1>
      <div className='grid grid-cols-3 gap-6 md:grid-cols-3 lg:grid-cols-3 '>
        {Cads.map((Contacts) => (
          <article
            key={Contacts.title}
            className='overflow-hidden rounded-lg border-2 border-black bg-white p-4 shadow-sm hover:translate-y-4 cursor-grab'>
            <div className='aspect-video w-full overflow-hidden'>
              <img
                src={Contacts.image}
                alt={Contacts.title}
                className='block h-full w-full object-cover'
                loading='lazy'
              />
            </div>
            <h2 className='mt-4 font-display text-xl'>
              {Contacts.title}
            </h2>
            <h3 className='mt-4 font-Parech '>
                {Contacts.Desription}
            </h3>
            <div className='mt-4 flex flex-wrap gap-3'>
              <a
                href={Contacts.github}
                target='_blank'
                rel="noreferrer"
                className='rounded-lg bg-gray-300 px-4 py-2 font-display hover:bg-amber-100'
              >
                Github
              </a>
              <a
                href={Contacts.onShape}
                target='_blank'
                rel="noreferrer"
                className='rounded-lg bg-gray-300 px-4 py-2 font-display hover:bg-amber-100'
              >
                Onshape
              </a>

            </div>


          </article>
        ))}

      </div>
    </main>
  )

}
