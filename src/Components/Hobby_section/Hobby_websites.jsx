import React from 'react'

export default function Hobby_websites({ onWeb }) {
     const Cads = [
    {
      title: 'ARIEL',
      image: 'ARIEL.png',
      Description:"This is a Nasa Inspired Custom new tab for Browser",
      github: 'https://github.com/arpan832/ARIEL',
      Demo: "https://arpan832.github.io/ARIEL/"
    
    },
 {
      title: 'PATRA',
      image: 'PATRA.png',
      Description:'This is a Notesapp with Prehistoric Pirate theme  ',
      github: 'https://github.com/arpan832/Portfolio_website',
      Demo:""
    
    },
    {
      title: 'Spidey Os',
      image: 'SPIDEYOS.png',
      Description:'This is an OS that runs on the Browser inspired by the great "Spider man "',
      github: 'https://github.com/arpan832/SpideyOs',
    },
    {
      title:"Safe-Voice",
      image:"SafeVoice.png",
      Description:"This is a Community sharing platform where people can share there Bad or good experiences anonamously and can get help from the community People ",
      github:"https://arpan832.github.io/Safe-Voice-/",
    }
  ]
  return (
    <main className='min-h-screen w-screen bg-cover bg-center overflow-hidden bg-no-repeat p-6'
    style={{backgroundImage:"url('https://i.pinimg.com/1200x/b9/78/cc/b978cc03fcd84f722b6b462ef753cb87.jpg')"}}
    >
      <button
        onClick={onWeb} // Back button 
        className='rounded-lg bg-green-200 px-4 py-2 font-bold'
      >
        Go Back
      </button>
      <h1 className='p-6 text-center font-display text-4xl underline'>
        My Web Projects
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
                className='block h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0'
                loading='lazy'
              />
            </div>
            <h2 className='mt-4 font-display text-xl'>
              {Contacts.title}
            </h2>
            <h1 className='mt-4 font-Parech '>
              {Contacts.Description}
            </h1>
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
                href={Contacts.Demo}
                target='_blank'
                rel="noreferrer"
                className='rounded-lg bg-gray-300 px-4 py-2 font-display hover:bg-amber-100'
              >
                Demo 
              </a>

            </div>


          </article>
        ))}

      </div>
    </main>
  )

}
