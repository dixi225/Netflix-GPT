import React, { useRef,useState } from 'react'
import { checkValidData } from '../Utills/Validations'
import { NETFLIX_BACKGROUND_URL } from '../Utills/Constants'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import {auth} from '../Utills/Firebase'
import Header from './Header';
import { USER_LOGO } from '../Utills/Constants';
const Login = () => {
  const [isSignin,setIsSignin]=useState(true)
  const [errorMessege,setErrorMessege]=useState(null)
  const toggleState=()=>{
    setIsSignin(!isSignin)
  }
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)
  const handleListner=()=>{
    setErrorMessege(checkValidData(email.current.value,password.current.value))//why no destructuring
    if(errorMessege) return
    if(!isSignin)
    {
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL:USER_LOGO
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessege(error)
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessege(errorCode+" - "+ errorMessage)
    // ..
  });
    }
    else
    {
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
          console.log(auth.currentUser);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessege(errorCode+" - "+ errorMessage)
      });
    }
  }
  return <>
        <Header/>
        <div className= ' flex justify-center '>
        <img className=' bg-gradient-to-br from-black absolute ' src={NETFLIX_BACKGROUND_URL} alt="" srcset="" />
            <form onSubmit={(e)=>e.preventDefault()} className=' z-20 rounded-md shadow-md bg-opacity-90 max-w-screen-sm mt-28 bg-black text-white  px-16 py-10' action="">
            {isSignin?<h1 className='font-semibold text-4xl my-10'>Sign In</h1>:<h1 className='font-semibold text-4xl my-10'>Sign Up</h1>}
            <div className='flex flex-col'>
            {!isSignin&&<input ref={name} className='focus:outline-none rounded-md shadow-lg max-w-screen-sm bg-gray-700 mt-8  p-4 ' type='text' placeholder='Name'/>}
                <input ref={email}  className=' focus:outline-none shadow-lg rounded-md max-w-screen-sm bg-gray-700 mt-10 p-4' placeholder='Email id' type="text" />
                <input ref={password} className='focus:outline-none shadow-lg rounded-md max-w-screen-sm bg-gray-700 mt-8  p-4 ' type='password' placeholder='Password'/>
                {errorMessege&&<p className=' px-2 pt-8 text-red-600'>* {errorMessege}</p>}
                <button onClick={handleListner} className=' font-bold max-w-screen-sm rounded-md mt-8 p-4 bg-red-600'>{isSignin?'Sign-In':'Sign-Up'}</button>
                <div className='flex gap-2'>
                  <p className='text-sm mt-8 text-gray-600'>New to Netflix?</p>
                  <p onClick={toggleState} className='cursor-pointer text-sm mt-8'> Sign Up</p>
            </div>
                </div>
            </form> 
        </div>
        </>
}

export default Login