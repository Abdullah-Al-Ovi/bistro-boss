import { useEffect, useState } from 'react';
import Cover from '../../SharedComponents/Cover/Cover';
import order from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';

import { useParams } from 'react-router-dom';
import Foodcards from './Foodcards/Foodcards';

const OrderFood = () => {
    const {category} = useParams()
    console.log(category);
    const categories =['Salad','Pizza','Soup','Desserts']
    const categoryIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(categoryIndex);
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
        <div>
            <Cover img={order} title={'Order Food'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='text-center my-3'>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                </TabList>
                </div>
                <TabPanel>
                    <Foodcards cateMenu={saladMenu}></Foodcards>
                </TabPanel>
                <TabPanel>
                    <Foodcards cateMenu={pizzaMenu}></Foodcards>
                </TabPanel>
                <TabPanel>
                <Foodcards cateMenu={soupMenu}></Foodcards>
                </TabPanel>
                <TabPanel>
                <Foodcards cateMenu={dessertMenu}></Foodcards>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default OrderFood;