import React from 'react'
import Header from './Header'
import useMoviePlaying from '../Utills/Hooks/useMoviePlaying'
import Mainconainer from './Mainconainer'
import Secondrycontainer from './Secondrycontainer'
const Browse = () => {
  useMoviePlaying()
  return <>
    <Header/>
    <Mainconainer/>
    <Secondrycontainer/>
    </>
}

export default Browse