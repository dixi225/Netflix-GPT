import React from 'react'
import logo from '../Utills/Netflix_Logo_PMS.png'
const Header = () => {
  return <div className=' absolute z-10'>
    <div >
       <img className='bg-gradient-to-b  from-black w-44  px-2 ' src={logo} alt="" />
    </div>
  </div>
}

export default Header