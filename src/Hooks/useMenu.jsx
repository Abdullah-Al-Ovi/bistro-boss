import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu,setMenu]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:5001/menu').then(data=>{
            setMenu(data.data)
          
        })
    },[])
    return menu

};

export default useMenu;
