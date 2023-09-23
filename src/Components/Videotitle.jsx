import React from 'react'

const Videotitle = ({title,overview}) => {
  return<div className=' absolute bg-gradient-to-r from-black aspect-video'>
  <div className='ml-8 pt-36 gap-y-6 flex flex-col text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg w-1/4 p'>{overview}</p>
        <div className='flex gap-x-2'>
            <button className='p-4 px-10 text-black bg-white  rounded-lg hover:bg-opacity-60'>Play</button>
            <button className='p-4 px-8 text-white bg-gray-700 bg-opacity-40 rounded-lg  hover:bg-gray-800'>More Info</button>
        </div>
    </div> 
  </div>
  

}

export default Videotitle