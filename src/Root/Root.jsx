import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import { useEffect } from "react";


const Root = () => {
    const location = useLocation()
  const avoidNav = location?.pathname === '/sign-in' || location?.pathname === '/sign-up'

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location.pathname])
    return (
        <div>
            {avoidNav || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;