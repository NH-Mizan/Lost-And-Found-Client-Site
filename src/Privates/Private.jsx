import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const Private = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private;