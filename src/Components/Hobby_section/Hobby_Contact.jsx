import React from 'react'

export default function Hobby_Contact({ onContact }) {

      const Cads = [
    {
      title: 'Expandable Book Organizer',
      image: 'expandable book organizer.png',
      github: 'https://github.com/arpan832/Portfolio_website',
      onShape: 'https://cad.onshape.com/',
    },
 {
      title: 'Proton Rocket -1',
      image: 'expandable book organizer.png',
      github: 'https://github.com/arpan832/Portfolio_website',
      onShape: 'https://cad.onshape.com/',
    },
    {
      title: 'Attachable Desk Light',
      image: 'expandable book organizer.png',
      github: 'https://github.com/arpan832/Portfolio_website',
      onShape: 'https://cad.onshape.com/',
    },
  ]
  return (
    <main className='min-h-screen p-6'>
      <button
        onClick={onContact} // Back button 
        className='rounded-lg bg-green-200 px-4 py-2 font-bold'
      >
        Go Back
      </button>
      <h1 className='p-6 text-center font-display text-4xl underline'>
        My Contacts 
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
