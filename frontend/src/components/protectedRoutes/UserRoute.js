import React from 'react'
import { useSelector } from "react-redux";
import {Navigate,Outlet} from 'react-router-dom'

function UserRoute() {
    //check if user is loggin
  const user = useSelector(state => state?.admin);   
  const { userAuth } = user;
  return userAuth?.isAdmin?<Outlet/>:<Navigate to='/'/>
}

export default UserRoute