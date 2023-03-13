import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/user/userlogin';
import Register from './components/user/registr';
import UserList from './components/user/userlist';
import Navbar from './components/Navigation/Navbar';

import UserRoute from './components/protectedRoutes/UserRoute';



function App() {
 
 
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route element={<UserRoute/>}>
   
   <Route exact path='/list' element={<UserList/>}  />    
   </Route> 
   <Route exact path='/register' element={<Register/>}/>     
   <Route exact path='/' element={<Login/>}  />  
   </Routes>
   </BrowserRouter>
   
   );
  }
            


         

   
 

export default App;
