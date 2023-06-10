import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const NewClassCard = ({ course, refetch }) => {
    const [status, setStatus] = useState(`${course?.classStatus}`);
    const { register, handleSubmit, watch, reset } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth();
    const [disabled, setDisabled] = useState(false)


    // console.log(typeof of refetch)

    const onSubmit = (update) => {
        const updateData = {
            ...update, classStatus: status, disabled: disabled
        }
        // console.log(updateData, course._id);
        axiosSecure.patch(`/update/${course._id}`, updateData)
            .then(response => {
                // console.log(response.data);
                refetch();
                setDisabled(true)
                reset();

            })
            .catch(error => {
                console.error(error);
            });

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={course.imgUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Class: {course.class}</h2>
                <div className="text-start">
                    <p>Instructor: {course?.instructor}</p>
                    <p>{course?.email}</p>
                    <p>Price: ${course?.price}</p>
                    <p>Available Seats: {course?.availableSeats}</p>
                    <p>Current Students: {course?.numOfStudent}</p>
                </div>
                <div className="py-2 flex justify-between items-center font-semibold">
                    <p className="">Status:</p>
                    <p className={`bg-orange-100 py-1 px-4 rounded-md mx-2 text-center uppercase`}>{course?.classStatus}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <button onClick={() => setStatus('approved')} className={`btn btn-success mx-2 ${disabled && course.classStatus !== 'pending' ? 'opacity-20 cursor-not-allowed' : ''}`}
                        disabled={disabled}
                    >Approve</button>
                    <button onClick={() => setStatus('denied')} className={`btn btn-error mx-2 ${disabled && course.classStatus !== 'pending' ? 'opacity-20 cursor-not-allowed' : ''}`}
                        disabled={disabled}
                    >Deny</button>
                    <div className="py-3">
                        {/* The button to open modal */}
                        <label htmlFor="my_modal_6" className="btn bg-indigo-950 text-white hover:text-black">open modal</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <div className="join py-3">
                                    <input
                                        type="text"
                                        className="input join-item  border-[1px] border-indigo-300"
                                        placeholder="Feedback"
                                        {...register("feedback", { required: false })}
                                    />

                                    <button type="submit" className="btn join-item rounded-r-full text-white bg-indigo-950 border-[3px] hover:text-black border-indigo-950">Send <FaPaperPlane /></button>
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn bg-red-200">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewClassCard;