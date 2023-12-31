import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Components/AuthProvider/AuthProvider";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5001'
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut}  = useContext(authContext)

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res; 
         },error=>{
             if(error.response.status === 401 || error.response.status === 403){
                 logOut()
                .then(()=>{
             navigate('/sign-in')
         })
             }
         })
    },[logOut,navigate])

    return axiosSecure
};

export default useAxiosSecure;