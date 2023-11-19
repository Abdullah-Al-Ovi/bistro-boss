import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/our-menu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'/order-food',
                element:<OrderFood></OrderFood>
            }
        ]
    }
])

export default Router;