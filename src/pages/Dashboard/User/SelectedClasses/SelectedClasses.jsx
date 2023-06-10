import Swal from "sweetalert2";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import { FaTrash, FaMoneyCheckAlt } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses();
    // console.log(selectedClasses)
    const handleDelete = (selectedClass) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/selected-classes/${selectedClass._id}`)
                    .then(res => {
                        // console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => console.error('Error deleting data:', error));
            }
        })
    }

    return (
        <div className="w-full py-4">
            <div className="uppercase font-semibold  flex justify-evenly items-center ">
                <h3 className="text-3xl">Total Selected Classes: {selectedClasses?.length}</h3>
            </div>
            <div className="overflow-x-auto h-96 overflow-y-scroll w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-base bg-indigo-100">
                            <th>#</th>
                            <th>Selected Classes</th>
                            <th>Isntructor</th>
                            <th>Current Student</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold ">
                        {
                            selectedClasses?.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {course.class}
                                </td>
                                <td>
                                    {course.instructor}
                                </td>
                                <td>
                                    {course.numOfStudent}
                                </td>
                                <td>
                                    {course.availableSeats}
                                </td>
                                <td className="">$ {course.price}</td>
                                <td>
                                    <Link to={`/dashboard/course-payment/${course._id}`}>
                                        <button className="flex justify-center items-center rounded-lg hover:bg-green-300 transition px-4 font-semibold py-3 bg-green-100 text-green-900" ><FaMoneyCheckAlt className="pr-1 w-6 h-6"></FaMoneyCheckAlt> Pay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(course)} className="flex justify-center items-center rounded-lg hover:bg-red-300 transition px-4 font-semibold py-3 bg-red-100 text-red-900"><FaTrash></FaTrash> Delete</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;