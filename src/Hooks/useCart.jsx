import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { authContext } from "../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const  {user} = useContext(authContext)
    // console.log(user?.email);
    const {refetch,data:cart=[]} = useQuery({
        queryKey:['cart',user?.email],
        enabled: !!user?.email,
        queryFn: async ()=>{
         const res= await axiosSecure.get(`/cart?email=${user?.email}`)
        //  console.log(res);
         return res.data
        }
    })
    // console.log(cart);
     return[cart,refetch] 
};

export default useCart;