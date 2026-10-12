import React from 'react'

export default function Hobby_cad({ onBack }) {
  const Cads = [
    {
      title: 'Proton Rocket -1',
      image: 'Screenshot 2026-10-12 182124.png',
      github: 'https://www.printables.com/model/1873723-proton-rocket-1',
      onShape: 'https://cad.onshape.com/documents/841bf87d854d816f1e872f81/w/e393f3c28d8b324b5ca7a59c/e/e3b32a6484142abfd9f9cd2c',
    },
 {
      title: 'Expandable Book organizer ',
      image: 'ExpandableBookOrganizerFixed.png',
      github: 'https://www.printables.com/model/1858776-project-expandable-book-holder',
      onShape: 'https://cad.onshape.com/documents/a077e6f096a97bd1b6e8d0f7/w/ce99a17a23b60ae1b855a111/e/26bf7dc8178ceb5b054d7315',
    },
    {
      title: 'Attachable Desk Lamp',
      image: 'ADL.png',
      github: 'https://github.com/arpan832/Portfolio_website',
      onShape: 'https://cad.onshape.com/',
    },
  ]
  return (
    <main className='min-h-screen p-6'>
      <button
        onClick={onBack} // Back button 
        className='rounded-lg bg-green-200 px-4 py-2 font-bold'
      >
        Go Back
      </button>
      <h1 className='p-6 text-center font-display text-4xl underline'>
        My Cad Projects
      </h1>
      <div className='grid grid-cols-3 gap-6 md:grid-cols-3 lg:grid-cols-3'>
        {Cads.map((Cads) => (
          <article
            key={Cads.title}
            className='overflow-hidden rounded-lg border-2 border-black bg-white p-4 shadow-sm hover:translate-y-4'>
            <div className='aspect-video w-full overflow-hidden'>
              <img
                src={Cads.image}
                alt={Cads.title}
                className='block h-full w-full object-cover'
                loading='lazy'
              />
            </div>
            <h2 className='mt-4 font-display text-xl'>
              {Cads.title}
            </h2>
            <div className='mt-4 flex flex-wrap gap-3'>
              <a
                href={Cads.github}
                target='_blank'
                rel="noreferrer"
                className='rounded-lg bg-gray-300 px-4 py-2 font-display hover:bg-amber-100'
              >
                Printables
              </a>
              <a
                href={Cads.onShape}
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
