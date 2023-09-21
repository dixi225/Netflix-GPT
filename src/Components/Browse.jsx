import React from 'react'
import Header from './Header'
import useMoviePlaying from '../Utills/Hooks/useMoviePlaying'
const Browse = () => {
  useMoviePlaying()
  return <>
    <Header/>
    </>
}

export default Browse