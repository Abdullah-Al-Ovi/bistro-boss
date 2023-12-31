import { useContext } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import useCart from "../../Hooks/useCart";


const Navbar = () => {
    const {user,logOut} = useContext(authContext)
  const navigate = useNavigate()
  const [cart] = useCart()
  console.log(cart);
 
    const route = <>
        <li><NavLink to='/'>Home</NavLink></li>
        
        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/our-menu'>Our menu</NavLink></li>
        <li><NavLink to='/our-shop'>Our shop</NavLink></li>
        <li><NavLink to='/order-food/Salad'>Order food</NavLink></li>
        <li><NavLink to='/dashboard/cart'><i className="fa-solid fa-cart-shopping "></i> <div className="badge badge-secondary">{cart.length}</div></NavLink></li>
        
    </>
     const handleSignOut=()=>{
      logOut()
      .then(()=>{
          navigate('/')
      })
  }
    return (
        <div className="navbar w-[90%] mx-auto fixed z-10 text-white bg-opacity-70 bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {route}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {route}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
            <><button onClick={handleSignOut} className="btn  ">Sign Out</button></> :
            <>
              <NavLink to='/sign-in'><li className="btn-ghost ">Sign In</li></NavLink>
            </>
          }
        </div>
      </div>
    );
};

export default Navbar;