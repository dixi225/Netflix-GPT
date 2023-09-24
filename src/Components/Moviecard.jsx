import React from 'react'
import {IMG_CDN_URL} from '../Utills/Constants'
const Moviecard = ({movie}) => {
  return movie&& (
    <div className=' cursor-pointer w-32 hover:scale-105 transition-transform'>
        <img src={IMG_CDN_URL+movie.poster_path} alt="#"/>
    </div>
  )
}

export default Moviecard