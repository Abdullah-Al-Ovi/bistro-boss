
import { useEffect, useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import Heading from "../../../SharedComponents/Heading/Heading";
import PriceList from "../../../SharedComponents/PriceList/PriceList";
import CategoryMenu from "../../../SharedComponents/CategoryMenu/CategoryMenu";
import CategoryBottom from "../../../SharedComponents/CategoryBottom/CategoryBottom";


const CommonMenu = () => {
    const [commonMenu,setCommonMenu] = useState([])
     const menu = useMenu()
     
    useEffect(()=>{
        const popularMenu = menu?.filter(popular=>popular.category === 'popular')
        setCommonMenu(popularMenu)
    },[menu])
    

    return (
        <div>
            <Heading subHeading={'Check it out'}
            heading={'FROM our menu'}
            ></Heading>
            <CategoryMenu cateMenu={commonMenu}></CategoryMenu>
            <CategoryBottom title={'View Full Menu'}></CategoryBottom>
        </div>
    );
};

export default CommonMenu;