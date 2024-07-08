import React from 'react'
import Navbar from './Navbar'
// import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
// import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const { songsData,albumsData } = useContext(PlayerContext);

  return (
    <>
     <Navbar />
     <h1 class='font-bold text-7xl mt-4 text-center'>
       WELCOME TO MUSICLY
     </h1>
     <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>MY PLAYLISTS</h1>
      <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
      </div>
     </div>
     <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>MY SONGS</h1>
      <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />))}
      </div>
     </div>
    </>
  )
}

export default DisplayHome
