import { useContext } from "react";
import { authContext } from "../../../../Components/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";

const Foodcard = ({ menuItem }) => {
    const { _id, name, price, recipe, image } = menuItem
    const {user} = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()

    const handleAddToCart=()=>{
        const cartInfo ={
            menuItemId : _id,
            userEmail : user?.email,
            name,
            price,
            image
        }
            if(user){
               axiosSecure.post('/cart',cartInfo)
               .then(res=>{
                console.log(res.data);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${name} added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
               })
            }
            else{
                navigate('/sign-in' , { state: location.pathname })
            }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body border-2 flex flex-col items-center space-y-2">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn border-b-[3px] rounded-lg border-[#BB8506] text-[#BB8506] hover:bg-black">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;