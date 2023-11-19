import { useEffect, useState } from 'react';
import useMenu from '../../Hooks/useMenu';
import Cover from '../../SharedComponents/Cover/Cover';
import Heading from '../../SharedComponents/Heading/Heading';
import ourmenu from '../../assets/menu/banner3.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'


import CategoryMenu from '../../SharedComponents/CategoryMenu/CategoryMenu';
import CategoryBottom from '../../SharedComponents/CategoryBottom/CategoryBottom';

const OurMenu = () => {
    const menu = useMenu()
    const [offeredMenu,setOfferedMenu] = useState([])
    const [dessertMenu,setDessertMenu] = useState([])
    const [pizzaMenu,setPizzaMenu] = useState([])
    const [saladMenu,setSaladMenu] = useState([])
    const [soupMenu,setSoupMenu] = useState([])
    useEffect(()=>{
        const filterOffer = menu?.filter(offer=>offer.category === 'offered')
        setOfferedMenu(filterOffer)
        const filterDessert = menu?.filter(dessert=>dessert.category === 'dessert')
        setDessertMenu(filterDessert)
        const filterPizza= menu?.filter(pizza=>pizza.category === 'pizza')
        setPizzaMenu(filterPizza)
        const filterSalad= menu?.filter(salad=>salad.category === 'salad')
        setSaladMenu(filterSalad)
        const filterSoup= menu?.filter(soup=>soup.category === 'soup')
        setSoupMenu(filterSoup)
    },[menu])
    return (
        <div className='space-y-5'>
            <Cover img={ourmenu} title={'Our menu'}></Cover>
            <Heading subHeading={'Do not miss'} heading={'Today offer'}></Heading>
            <CategoryMenu cateMenu={offeredMenu}></CategoryMenu>
            <CategoryBottom title={'Order Your Favorite Food'}></CategoryBottom>
            <Cover img={dessert} title={'Desserts'}></Cover>
            <CategoryMenu cateMenu={dessertMenu}></CategoryMenu>
            <CategoryBottom title={'Order Your Favorite Food'}></CategoryBottom>
            <Cover img={pizza} title={'Pizza'}></Cover>
            <CategoryMenu cateMenu={pizzaMenu}></CategoryMenu>
            <CategoryBottom title={'Order Your Favorite Food'}></CategoryBottom>
            <Cover img={salad} title={'Salad'}></Cover>
            <CategoryMenu cateMenu={saladMenu}></CategoryMenu>
            <CategoryBottom title={'Order Your Favorite Food'}></CategoryBottom>
            <Cover img={soup} title={'Soup'}></Cover>
            <CategoryMenu cateMenu={soupMenu}></CategoryMenu>
            <CategoryBottom title={'Order Your Favorite Food'}></CategoryBottom>
            
        </div>
    );
};

export default OurMenu;