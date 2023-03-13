import React from 'react'
import { useSelector } from 'react-redux'

import UserNavbar from './User/UserNavbar'

import PublicNavbar from './public/PublicNavbar'



const Navbar = () => {
    //get user from store
    const state=useSelector(state=>state.admin)  
   const {userAuth}=state
   const isAdmin=userAuth?.isAdmin
   console.log(isAdmin);
  return (
    <>
    {isAdmin?(<UserNavbar isLogin={userAuth}/>):(<PublicNavbar/>)}  
    </>
  )
}

export default Navbar    