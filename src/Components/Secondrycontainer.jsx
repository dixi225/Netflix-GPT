import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
import useNowMoviePlaying from '../Utills/Hooks/useNowMoviePlaying'
import useTopratedMoviePlaying from '../Utills/Hooks/useTopratedMoviePlaying'
import useUpcomingMoviePlaying from '../Utills/Hooks/useUpcomingMoviePlaying'
const Secondrycontainer = () => {
  const movies=useSelector((Store)=>Store.movie)
  useNowMoviePlaying()
  useTopratedMoviePlaying()
  useUpcomingMoviePlaying()
  return movies&&(
    <div className=' bg-black'>
      <div className=' -mt-10 z-20 relative'>
          <Movielist title={'Now Playing'} movies={movies?.nowPlayingMovieList} />
          <Movielist title={'Popular'} movies={movies?.movieList} />
          <Movielist title={'Top Rated'} movies={movies?.topRatedMovieList} />
          <Movielist title={'UpComing'} movies={movies?.upcomingMovieList} />
      </div>
    </div>
  )
}

export default Secondrycontainer