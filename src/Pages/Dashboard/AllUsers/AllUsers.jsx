import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data:users=[],refetch} = useQuery({
        queryKey:['allUsers'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleRemoveUser =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, remove `
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been removed.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    const handleMakeAdmin =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, make admin `
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Congo!",
                                text: "Made admin successfully",
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
                <h2 className="text-lg font-medium">TOTAL USERS: {users.length}</h2>
                
            </div>
            <div>
                <table className="w-full ">
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th className="border-2 p-2"></th>
                            <th className="border-2 p-2">NAME</th>
                            <th className="border-2 p-2">EMAIL</th>
                            <th className="border-2 p-2">ROLE</th>
                            <th className="border-2 p-2">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className={`border-b text-center ${index === user.length - 1 ? '' : 'border-gray-300'}`}>
                                <td className="flex justify-center p-2">
                                   {index + 1}
                                </td>
                                <td className=" p-2">{user.name}</td>
                                <td className=" p-2">{user.email}</td>
                                <td className=" p-2">
                                    {
                                        user?.role === 'admin' ? 'Admin' :
                                        <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-neutral  bg-[#D1A054]"><i className="fa-solid fa-users"></i></button>
                                    }
                                </td>
                                <td className=" p-2">
                                    <button
                                        onClick={() => handleRemoveUser(user._id)}

                                    >
                                        <button className="btn btn-neutral bg-white">
                                        <i className="fa-solid fa-trash text-red-400"></i>
                                        </button>
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

export default AllUsers;