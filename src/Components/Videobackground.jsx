import React, { useEffect } from 'react'
import { movieOptions } from '../Utills/Constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utills/Hooks/useMovieTrailer'

const Videobackground = ({id}) => {
  useMovieTrailer({id})
  const trailer=useSelector((store)=>store.movie?.mainTrailer)
  return <div>
      {trailer&&<iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailer?.key+"?si=elqem5ErshtQAIGV"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

      </iframe>}
    </div>
}

export default Videobackground