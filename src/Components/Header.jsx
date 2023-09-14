import React from 'react'
import logo from '../Utills/Netflix_Logo_PMS.png'
const Header = () => {
  return <div className=' absolute z-10'>
    <div >
       <img className='w-44 m-6' src={logo} alt="" />
    </div>
  </div>
}

export default Header