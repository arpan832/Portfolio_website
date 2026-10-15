import React from 'react'

export default function Hobby_art({onArt}) {
   const Cads = [
    {
      title: 'This Page Will be Updated Soon',
      image: 'https://i.pinimg.com/736x/69/49/14/69491492dc263bea8c1df7822f588aa2.jpg',
    },
  ]
  return (
    <main className='min-h-screen p-6'>
      <button
        onClick={onArt} // Back button 
        className='rounded-lg bg-green-200 px-4 py-2 font-bold'
      >
        Go Back
      </button>
      <h1 className='p-6 text-center font-display text-4xl underline'>
        My Arts
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

          </article>
        ))}

      </div>
    </main>
  )

}
