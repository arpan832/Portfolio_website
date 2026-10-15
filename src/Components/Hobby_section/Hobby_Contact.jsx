import React from 'react'

export default function Hobby_Contact({ onContact }) {

      const Cads = [
    {
      title: 'Instagram',
      image: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/845291467_17893640724611879_6622717840297017056_n.jpg?_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Q0_4xqbS9IwQ7kNvwGe7ueS&_nc_oc=AdpD6Ya9kw4SR0OhBjSnRg6sH4BgiVfeuIGA3tPBWJ37axJN5W66VeDWGiW9my_IWm0&_nc_zt=24&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=Ozik3byDYDJRqhKQlHrXhQ&_nc_ss=7b6a8&oh=00_AQOvsoVQch_Hi448ovzf0-DRYDIRZdHzHZU-F9xLy4zNfg&oe=6AD2EC68 ',
      Description:"Here i post my Content",
      github: 'https://www.instagram.com/arpannnn_md/',
  
    },
 {
      title: 'Youtube',
      image: 'https://i.pinimg.com/736x/0c/bc/65/0cbc6559643ee97b13106e880f246d6e.jpg',
      Description:"On Coming ",
    },
    {
      title: 'Mail',
      image: 'https://i.pinimg.com/1200x/5a/6c/69/5a6c6989a09a029d3f2baab703101d49.jpg',
      Description:"Mail me here - mynameari789@gmail.com",
      
    },
    {
      title: 'Github',
      image: 'https://avatars.githubusercontent.com/u/205518282?v=4',
      Description:'My github',
      github:'https://github.com/arpan832'
    }
  ]
  return (
    <main className='min-h-screen w-screen bg-cover bg-center overflow-hidden bg-no-repeat p-6'
    style={{backgroundImage:"url('https://i.pinimg.com/1200x/0a/46/ed/0a46ed306c13419c838bbebb54a0308b.jpg')"}}
    >
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
            <h1 className='mt-4 font-sherif'>
              {Contacts.Description}
            </h1>
            <div className='mt-4 flex flex-wrap gap-3'>
              <a
                href={Contacts.github}
                target='_blank'
                rel="noreferrer"
                className='rounded-lg bg-gray-300 px-4 py-2 font-display hover:bg-amber-100'
              >
                Link
              </a>
              

            </div>


          </article>
        ))}

      </div>
    </main>
  )

}
