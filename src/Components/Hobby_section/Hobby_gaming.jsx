import React from 'react'

export default function Hobby_gaming({onGaming}) {

    const Gaming = [
    {
      title: 'RDR 2 ',
      image: 'https://i.pinimg.com/1200x/de/df/b6/dedfb632acbc12844977de4056ede2bf.jpg',
      Description:"Its so good that i actually bought it !!! "
    },
    {
        title: 'Gta 5',
        image:'https://i.pinimg.com/736x/af/4c/ce/af4cceba245090d6fa7fe78f7cbf69a9.jpg',
        Description:'Lowky it gives the Nostalgic Vibe '
    },
    {
      title: 'Ghost Of Tsushima',
      image: 'https://i.pinimg.com/1200x/2c/86/1b/2c861b6cf3b7f4565b8750b11ee8ee2a.jpg',
      Description:'The last scene broke me awwwwwwwwww',
    },
    {
      title: 'God Of War',
      image:'https://i.pinimg.com/736x/1a/53/62/1a53620f207e79a881e729b84486b12d.jpg',
      Description:"This SHit is real bruhh!! (BOY !!) Dayum"
    },
    {
      title:"God of War Ragnarok",
      image:"https://i.pinimg.com/736x/b4/76/c2/b476c280dbe9ddfbf53065c9eba4fe66.jpg",
      Description:"Dont Be SOrry Be Better hell yeah",
    },
    {
      title:"Resident Evil all parts",
      image:"https://i.pinimg.com/736x/1a/38/b4/1a38b4b7f6ce3c39639ae2986af2ddf4.jpg",
      Description:'All Parts Were lit except the last one(Personally) '
    },
    {
      title:"Witcher 3",
      image:"https://i.pinimg.com/736x/97/cf/1b/97cf1b5b12bc212b2185361b4e0cfc49.jpg",
      Description:"Defination of peak"
    },
    {
      title:"Marvels Spider man",
      image:"https://i.pinimg.com/1200x/1b/68/fe/1b68fef1fab746f468459df4716393a9.jpg",
      Description:'Felt like i was swinging',
    },
    {
      title:"Gta vice City",
      image:"https://i.pinimg.com/1200x/84/e2/e2/84e2e27e4cefff08eb1e15b0223eb9c9.jpg",
      Description: "First GTA game that i played in my native language",
    },
    {
      title:"San Andreas",
      image:"https://i.pinimg.com/736x/ba/75/55/ba7555f3e773aff3d3f239658c6c92c1.jpg",
      Description:"ALL YOU HAVE TO DO IS FOLLOW THE DAMN TRAIN CJ!!!",
    },
    {
      title:"God of War Sparta",
      image:"https://i.pinimg.com/736x/91/dc/01/91dc01b0ebac0f3fc994875e61f8d3bd.jpg",
      Description:"Propoganda I fell for "
    }
  ]
  return (
    <main className='min-h-screen w-screen bg-cover bg-center overflow-hidden bg-no-repeat p-6'
     style={{backgroundImage:"url('https://i.pinimg.com/736x/ff/e7/b5/ffe7b523ef37cbbc958b08582ddbc51f.jpg')"}}
    >

      <button
        onClick={onGaming} // Back button 
        className='rounded-lg bg-green-200 px-4 py-2 font-bold'
      >
        Go Back
      </button>
      <h1 className='p-6 text-center font-display text-4xl underline text-white '>
        My Fav Games
      </h1>
      <div className='grid grid-cols-3 gap-6 md:grid-cols-3 lg:grid-cols-3'>
        {Gaming.map((Gaming) => (
          <article
            key={Gaming.title}
            className='overflow-hidden rounded-lg border-2 border-black bg-white p-4 shadow-sm hover:translate-y-4'>
            <div className='aspect-video w-full overflow-hidden'>
              <img
                src={Gaming.image}
                alt={Gaming.title}
                className='block h-full w-full object-cover'
                loading='lazy'
              />
            </div>
            <h2 className='mt-4 font-display text-xl'>
              {Gaming.title}
            </h2>
            <h3 className='mt-4 font-serif '>
                  {Gaming.Description}
            </h3>
            


          </article>
        ))}

      </div>
    </main>
  )
}
