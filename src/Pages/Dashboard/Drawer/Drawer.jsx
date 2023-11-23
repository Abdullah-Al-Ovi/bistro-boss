import { NavLink } from "react-router-dom";


const Drawer = () => {

    const isAdmin = true
    return (
        <div className="p-4">
            <div className="my-10 ">
                <h1 className="uppercase text-xl font-bold">Bistro Boss</h1>
                <h3 className="uppercase text-xl">restaurant</h3>
            </div>
            <ul className="space-y-3">
                {
                    isAdmin ? <>
                        <li><NavLink to='/dashboard/adminHome' style={({ isActive }) => {
                            return { color: isActive ? 'white' : '' }
                        }}>ADMIN HOME</NavLink></li>
                        <li><NavLink to='/dashboard/addItems' style={({ isActive }) => {
                            return { color: isActive ? 'white' : '' }
                        }}>ADD ITEMS</NavLink></li>
                        <li><NavLink to='/dashboard/manageItems' style={({ isActive }) => {
                            return { color: isActive ? 'white' : '' }
                        }}>MANAGE ITEMS</NavLink></li>
                        <li><NavLink to='/dashboard/manageBookings' style={({ isActive }) => {
                            return { color: isActive ? 'white' : '' }
                        }} >MANAGE BOOKINGS</NavLink></li>
                        
                        <li><NavLink to='/dashboard/allUsers' style={({ isActive }) => {
                            return { color: isActive ? 'white' : '' }
                        }}>ALL USERS</NavLink></li>
                    </> :
                        <>
                            <li><NavLink to=''>USER HOME</NavLink></li>
                            <li><NavLink to=''>RESERVATION</NavLink></li>
                            <li><NavLink to=''>PAYMENT HISTORY</NavLink></li>
                            <li><NavLink to='/dashboard/cart' style={({ isActive }) => {
                                return { color: isActive ? 'white' : '' }
                            }} >MY CART</NavLink></li>
                            <li><NavLink to=''>ADD REVIEW</NavLink></li>
                            <li><NavLink to=''>MY BOOKING</NavLink></li>
                        </>
                }

                {/* COmmon list items */}
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