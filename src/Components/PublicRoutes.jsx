import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
const token = sessionStorage.getItem('__session');
    if(token){
    return true
  } else {
    return false
  }
}

const  PublicRoutes=(props:any) =>{

  const auth=useAuth()

  return auth?<Navigate to="/dashboard"/>: <Outlet/>
}

export default PublicRoutes;