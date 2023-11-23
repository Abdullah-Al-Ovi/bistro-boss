import { useEffect } from "react";
import useCart from "../../../Hooks/useCart";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const Mycart = () => {
    const [cart,refetch] = useCart()
    const [totalPrice, setTotalPrice] = useState()
    const axiosSecure = useAxiosSecure()
    
    useEffect(() => {
        const sumPrice = cart.reduce((sum, item) => sum + item.price, 0)
        setTotalPrice(sumPrice)
    }, [cart])

    const handleRemoveItem = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="">
            <div className="flex justify-between p-3 ">
                <h2 className="text-lg font-medium">TOTAL ORDERS: {cart.length}</h2>
                <h2 className="text-lg font-medium">TOTAL PRICE: ${totalPrice}</h2>
                <button className="btn bg-[#D1A054] text-white">PAY</button>
            </div>
            <div>
                <table className="w-full ">
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th className="border-2 p-2">ITEM IMAGE</th>
                            <th className="border-2 p-2">ITEM NAME</th>
                            <th className="border-2 p-2">PRICE</th>
                            <th className="border-2 p-2">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id} className={`border-b text-center ${index === cart.length - 1 ? '' : 'border-gray-300'}`}>
                                <td className="flex justify-center p-2">
                                    <img
                                        className="w-[70px] h-[70px] object-cover"
                                        src={item.image}
                                        alt=""
                                    />
                                </td>
                                <td className=" p-2">{item.name}</td>
                                <td className=" p-2">${item.price}</td>
                                <td className=" p-2">
                                    <button
                                        onClick={() => handleRemoveItem(item._id)}

                                    >
                                        <i className="fa-solid fa-trash text-red-400"></i>
                                    </button>
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Mycart;