import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    let {user,loading} = useContext(authContext)
    const location = useLocation()
    if(loading){
        return <div className="h-[60vh] flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
       return children  
    }
    return  <Navigate state={location.pathname} to='/sign-in'></Navigate>
};

export default PrivateRoute;