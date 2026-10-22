import React from 'react'

export default function Hobby_cad({ onBack }) {
  const Cads = [
    {
      title: 'Proton Rocket -1',
      image: 'https://media.printables.com/media/prints/72cd71b8-aace-4992-86f5-f52a899b58eb/images/14065604_9f1cdb37-5df4-4e6a-9728-4367de82ada8_c6d00a5e-06b6-4ad6-b425-e8c4de8b06c9/thumbs/inside/1920x1440/png/screenshot-2026-10-10-220440.webp',
      github: 'https://www.printables.com/model/1873723-proton-rocket-1',
      onShape: 'https://cad.onshape.com/documents/841bf87d854d816f1e872f81/w/e393f3c28d8b324b5ca7a59c/e/e3b32a6484142abfd9f9cd2c',
    },
 {
      title: 'Expandable Book organizer ',
      image: 'https://media.printables.com/media/prints/fdb8d50a-14ec-4658-9686-5a27e478dce4/images/13939926_e311071a-ca79-4892-acb0-766bb0a64456_2de8c119-c59c-4a36-b705-65717d6b5409/thumbs/inside/1600x1200/png/screenshot-2026-09-28-151018.webp',
      github: 'https://www.printables.com/model/1858776-project-expandable-book-holder',
      onShape: 'https://cad.onshape.com/documents/a077e6f096a97bd1b6e8d0f7/w/ce99a17a23b60ae1b855a111/e/26bf7dc8178ceb5b054d7315',
    },
    {
      title: 'Attachable Desk Lamp',
      image: 'https://media.printables.com/media/prints/30c6f753-ecd2-4784-8c18-805041696fc9/images/14065983_22632c5a-496b-4ff4-b210-ed2b339d65c9_89b7b07c-cf3f-4e75-baca-34549c94b3ca/thumbs/inside/1600x1200/png/screenshot-2026-10-12-022808.webp',
      github: 'https://github.com/arpan832/Portfolio_website',
      onShape: 'https://cad.onshape.com/',
    },
  ]
  return (
    <main className='min-h-screen w-screen bg-cover bg-center overflow-hidden bg-no-repeat p-6'
     style={{backgroundImage:"url('https://i.pinimg.com/736x/bc/af/b1/bcafb1a683eb9a7324bbd9a2aa9724f6.jpg')"}}
    >

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
