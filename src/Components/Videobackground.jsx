import React, { useEffect } from 'react'
import { movieOptions } from '../Utills/Constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utills/Hooks/useMovieTrailer'

const Videobackground = ({id}) => {
  useMovieTrailer({id})
  const trailer=useSelector((store)=>store.movie?.mainTrailer)
  return <div>
      {trailer&&<iframe className=" w-screen aspect-video"src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1"}frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

      </iframe>}
    </div>
}

export default Videobackground