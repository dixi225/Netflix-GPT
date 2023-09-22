import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'

const Mainconainer = () => {
    const movies=useSelector(store=>store.movie?.movieList)
    if(!movies) return ;    
    const mainMovie=movies[0] 
    if(!mainMovie) return ;    
    const{original_title,overview,id}=mainMovie
    return<div>
      <Videotitle title={original_title} overview={overview} />
      <Videobackground id={id} />
  </div>
}

export default Mainconainer