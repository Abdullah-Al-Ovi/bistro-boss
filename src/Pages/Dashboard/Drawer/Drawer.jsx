import { NavLink } from "react-router-dom";


const Drawer = () => {
    return (
        <div className="p-4">
            <div className="my-5 ">
                <h1 className="uppercase text-xl font-bold">Bistro Boss</h1>
                <h3 className="uppercase text-xl">restaurant</h3>
            </div>
            <ul className="space-y-3">
                <li><NavLink to=''>USER HOME</NavLink></li>
                <li><NavLink to=''>RESERVATION</NavLink></li>
                <li><NavLink to=''>PAYMENT HISTORY</NavLink></li>
                <li><NavLink to='/dashboard/cart'>MY CART</NavLink></li>
                <li><NavLink to=''>ADD REVIEW</NavLink></li>
                <li><NavLink to=''>MY BOOKING</NavLink></li>
                <div className="divider"></div>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/our-menu'>MENU</NavLink></li>
                <li><NavLink to=''>SHOP</NavLink></li>
                <li><NavLink to=''>CONTACT</NavLink></li>
            </ul>
        </div>
    );
};

export default Drawer;