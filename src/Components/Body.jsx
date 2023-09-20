import React, { useEffect } from 'react'
import Login from './Login'
import { useDispatch } from 'react-redux';
import { auth } from '../Utills/Firebase'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import Browse from './Browse'
import { addUser, removeUser } from '../Utills/Userslice';

const Body = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName} = user;
        dispatch(addUser({uid , email , displayName})) //what in case of existing user
        // ...
      } else {
        // User is signed out
        // ... 
        dispatch(removeUser())
      }
    });
  },[])
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body