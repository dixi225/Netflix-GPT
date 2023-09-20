import React from 'react'
import logo from '../Utills/Netflix_Logo_PMS.png'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth} from '../Utills/Firebase'
import { useSelector } from 'react-redux';

const Header = () => {
  // const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const handleClick=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
    
  }
  const user=auth.currentUser
  return <div className='flex justify-between w-full bg-gradient-to-b from-black absolute z-10'>
    <div >
       <img className=' w-44  px-2 ' src={logo} alt="" />
    </div>
    {user&&<div className='flex items-center mr-2'>
        <div onClick={handleClick} className=' p-2 text-white font-bold'> Sign-out
        </div>
        <div>
          {console.log(user)}
          <img className=' w-14' src={user.photoURL} alt="" />
        </div>
    </div>}
  </div>
}

export default Header