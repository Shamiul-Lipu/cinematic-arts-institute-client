import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaUserTie, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [disable, setDisable] = useState(false)
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        // console.log('res from useSelectedClasses axios', res)
        return res.data;
    })

    // useEffect(() => {
    //     refetch(); // Trigger data refetch on component mount
    // }, [disable]);
    // console.log(users);

    const handleRole = (users, role) => {
        if (users.role === 'admin') {
            setDisable(true)
        }
        const { email } = users;
        // console.log(email, role);
        setDisable(true);

        //  PUT request
        axios.put(`${import.meta.env.VITE_API_URL}/users/${email}?role=${role}`)
            .then(response => {
                // console.log(response.data);
                if (response.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${users.name} is an ${role} Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error(error);
            });
        refetch();
    };


    return (
        <div className="w-full py-4">
            <div className="uppercase font-semibold  flex justify-evenly items-center ">
                <h3 className="text-xl pb-2"><span className="text-indigo-600 font-bold">Total Users {users?.length}</span></h3>
            </div>
            <div className="overflow-x-auto h-96 overflow-y-scroll w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="sticky top-0">
                        <tr className="font-bold text-base bg-indigo-100">
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>User{'\''}s Role</th>

                            <th colSpan="2" className="text-center">Change User Role</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold ">
                        {
                            users?.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>

                                <td className="">{user.role}</td>
                                <td>

                                    <button onClick={() => handleRole(user, 'admin')} disabled={disable && user.role === 'admin'} className={`${disable && user.role == 'admin' ? 'cursor-not-allowed' : ''} flex justify-center items-center rounded-lg hover:bg-green-300 transition px-4 font-semibold py-3 bg-indigo-300 text-green-900`} ><FaUserShield className="pr-1 w-6 h-6"></FaUserShield> Admin</button>

                                </td>
                                <td>
                                    <button onClick={() => handleRole(user, 'instructor')} disabled={disable && user.role === 'instructor'} className={`${disable && user.role == 'instructor' ? 'cursor-not-allowed' : ''} flex justify-center items-center rounded-lg hover:bg-green-300 transition px-4 font-semibold py-3 bg-violet-300 text-green-900`}><FaUserTie className="pr-1 w-6 h-6"></FaUserTie> Instructor</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;