import React from 'react'

export default function Hobby_websites({ onWeb }) {
     const Cads = [
    {
      title: 'ARIEL',
      image: 'https://private-user-images.githubusercontent.com/205518282/617135808-72ae62b6-e578-4137-a7bb-73b1e28e9510.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTE4Mjg4ODcsIm5iZiI6MTc5MTgyODU4NywicGF0aCI6Ii8yMDU1MTgyODIvNjE3MTM1ODA4LTcyYWU2MmI2LWU1NzgtNDEzNy1hN2JiLTczYjFlMjhlOTUxMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAxMlQxODA5NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YzNjNDg2OWUyZjA2M2Y5ZDRmZDFjNTI1MGI3OGEzOGMyMmZkZmJmYzg2Y2E1NWFlMmYyMGU3MGM0ZDk5ODZhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.ay1o2__0Rk2-NWNizQjeu3xOnnfyZc0LX8HDmT0Dz-c',
      Description:"This is a Nasa Inspired Custom new tab for Browser",
      github: 'https://github.com/arpan832/ARIEL',
    
    },
 {
      title: 'PATRA',
      image: 'https://private-user-images.githubusercontent.com/205518282/665670642-99d6a10d-2f5e-4588-9e4b-aeb86d4ab34e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTE4MjkwOTAsIm5iZiI6MTc5MTgyODc5MCwicGF0aCI6Ii8yMDU1MTgyODIvNjY1NjcwNjQyLTk5ZDZhMTBkLTJmNWUtNDU4OC05ZTRiLWFlYjg2ZDRhYjM0ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAxMlQxODEzMTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYTZkOWNmMjEwODQ4NzAzYzBmYmFiMmFlZjgyYjQ5NDM2NjU3YTRiMzgwMzlkMmZiMzIxOTJjZDMyNWFkNjJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.KhCI1aRokDb98EsGnIcJJ76oxzIBFLdzx2g1LHqJBN4',
      Description:'This is a Notesapp with Prehistoric Pirate theme  ',
      github: 'https://github.com/arpan832/Portfolio_website',
    
    },
    {
      title: 'Spidey Os',
      image: 'https://private-user-images.githubusercontent.com/205518282/659149175-27240e4b-b636-4ca5-8e98-20e808670c6b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTE4MjkyMDMsIm5iZiI6MTc5MTgyODkwMywicGF0aCI6Ii8yMDU1MTgyODIvNjU5MTQ5MTc1LTI3MjQwZTRiLWI2MzYtNGNhNS04ZTk4LTIwZTgwODY3MGM2Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAxMlQxODE1MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mY2U5MTNlYmMwZjhkY2IwMGUwYjRlZDVlZGEyODFlMjZkNzg3ODBiNDAwZTVlODRlNGY4NDk3ODZlY2M2MDJkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.XmTAp1DSaZiwNa5fmK0ByLuB0tlMKxqI19_W38Ua3qY',
      Description:'This is an OS that runs on the Browser inspired by the great "Spider man "',
      github: 'https://github.com/arpan832/SpideyOs',
      onShape: 'https://cad.onshape.com/',
    },
  ]
  return (
    <main className='min-h-screen p-6'>
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
                className='block h-full w-full object-cover'
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

            </div>


          </article>
        ))}

      </div>
    </main>
  )

}
