import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";


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
                path:'/order-food/:category',
                element:<OrderFood></OrderFood>
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default Router;