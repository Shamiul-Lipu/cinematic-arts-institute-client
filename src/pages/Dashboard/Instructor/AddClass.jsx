import axios from "axios";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import SubSectionTitle from "../../../components/Titles/SubSectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/Titles/SectionTitle";

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data, typeof data.price);
        axios.post(`${import.meta.env.VITE_API_URL}/instructor-post-class`, data)
            .then(response => {
                // console.log(response.data);
                toast.success('Your Class Successfully added!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
                reset();
                navigate('/dashboard/my-classes')
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <section className="p-3">
            <SectionTitle title={'Add Your Class'}></SectionTitle>
            <form
                className="row g-3 border-2 border-indigo-300 p-4 rounded-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* instructor name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("instructor", { required: true })}
                            name="instructor"
                            placeholder="Name"
                            defaultValue={user?.displayName}
                            readOnly
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.name ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                        />
                    </div>
                    {/* instructor email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            type="text"
                            {...register("email", { required: true })}
                            name="email"
                            placeholder="email"
                            defaultValue={user?.email}
                            readOnly
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.email ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                        />
                    </div>
                    {/* class name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("class", { required: true })}
                            name="class"
                            placeholder="your class"
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.class ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                        />
                        {errors.class && <span className="text-red-600 flex justify-start items-center mt-1">
                            <FaExclamationCircle />Class name is required</span>}
                    </div>
                    {/* class Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input
                            type="number"
                            {...register("price", { required: true, valueAsNumber: true })}
                            name="price"
                            placeholder="$"
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.price ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                        />
                        {errors.price && <span className="text-red-600 flex justify-start items-center mt-1">
                            <FaExclamationCircle />Price of the class is required</span>}
                    </div>
                    {/* Available seats*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input
                            type="number"
                            {...register("availableSeats", { required: true, valueAsNumber: true })}
                            name="availableSeats"
                            placeholder="Available seats"
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.availableSeats ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                        />
                        {errors.availableSeats && <span className="text-red-600 flex justify-start items-center mt-1">
                            <FaExclamationCircle />Add seats is required</span>}
                    </div>
                </div>

                {/* imgUrl  */}
                <div className="form-control py-5">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text"  {...register("imgUrl", { required: true })}
                        placeholder="Photo URL"
                        className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.imgUrl ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                    {errors.imgUrl && <span className="text-red-600 flex justify-start items-center mt-1">
                        <FaExclamationCircle />Image URL is required</span>}
                </div>

                {/* hidden datas */}
                {/* classStatus  */}
                <div className="hidden">
                    <div className="form-control py-5">
                        <label className="label">
                            <span className="label-text">classStatus</span>
                        </label>
                        <input type="text"  {...register("classStatus", { required: true })}
                            defaultValue={'pending'}
                            placeholder="classStatus"
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.imgUrl ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                    </div>
                    {/* instructor photoURL user?.photoURL */}
                    <div className="form-control py-5">
                        <label className="label">
                            <span className="label-text">Isntructor Image URL</span>
                        </label>
                        <input type="text"  {...register("instructorImg", { required: true })}
                            placeholder="Photo URL"
                            defaultValue={user?.photoURL}
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.imgUrl ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                    </div>
                    {/* number of student */}
                    <div className="form-control py-5">
                        <label className="label">
                            <span className="label-text">Isntructor Image URL</span>
                        </label>
                        <input type="number"  {...register("numOfStudent", { required: true, valueAsNumber: true })}
                            placeholder=""
                            defaultValue={0}
                            className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.imgUrl ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                    </div>
                </div>

                <div className="col-12">
                    <PrimaryBtn label={'Add Your Class'} type="submit" className="btn btn-primary">

                    </PrimaryBtn>
                </div>
            </form>
        </section>
    );
};

export default AddClass;