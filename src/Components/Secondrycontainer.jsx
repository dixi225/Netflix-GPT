import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondrycontainer = () => {
  const movies=useSelector((Store)=>Store.movie)
  return movies&&(
    <div className=' bg-black'>
      <div className=' -mt-24 z-20 relative'>
          <Movielist title={'Popular'} movies={movies?.movieList} />
          <Movielist title={'Now Playing'} movies={movies?.movieList} />
          <Movielist title={'Top Rated'} movies={movies?.movieList} />
          <Movielist title={'UpComing'} movies={movies?.movieList} />

      </div>
    </div>
  )
}

export default Secondrycontainer