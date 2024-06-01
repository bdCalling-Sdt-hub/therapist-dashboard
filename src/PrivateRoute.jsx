import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const location = useLocation();
     const admin = JSON.parse(localStorage.getItem('yourInfo'));
     console.log(admin);

     if(admin?.role === "Admin"){
          return children;
     }
     return <Navigate to="/login" state={{from:location}} replace/>
}

export default PrivateRoute;