import React from 'react'
import Moviecard from './Moviecard'
const Movielist = ({title,movies}) => {
  return (
    <div>
        <h1 className=' ml-2  text-4xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide '>
             <div className='flex gap-x-6 p-8 '>
            {movies&&movies.map((movie)=><Moviecard movie={movie}/>)}
        </div>
        </div>
    </div>
  )
}

export default Movielist