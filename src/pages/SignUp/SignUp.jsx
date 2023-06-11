/* eslint-disable no-unused-vars */
import SectionTitle from "../../components/Titles/SectionTitle";
import imageSignUp from '../../assets/images/signup.jpg'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaExclamationTriangle, FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import SubSectionTitle from "../../components/Titles/SubSectionTitle";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import axios from "axios";
import useTitle from "../../hooks/useTitle";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [seePass, setSeePass] = useState(false)
    const [error, setError] = useState("");
    const { createUser, auth, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    useTitle('Sign up')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // for confirm password validation
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            return
        }
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userData = { name: data.name, email: data.email, role: 'student' }
                        axios.post(`${import.meta.env.VITE_API_URL}/users`, userData)
                            .then(res => {
                                // console.log(res.data)
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                            .catch(error => console.error('Error from Signup page Post:', error));
                    })
                    .catch(error => console.log(error))
            })
    };
    // Google Sign up
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                const userData = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student' }
                axios.post(`${import.meta.env.VITE_API_URL}/users`, userData)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                    .catch(error => console.error('Error from Signup page Post:', error));
                navigate('/');
            })
    }

    return (
        <section className="min-h-screen">
            <SectionTitle titleShort={'Welcome, Sign up to get an account'}></SectionTitle>
            {/*  */}
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex flex-row justify-center items-center md:grid md:grid-cols-2 ">
                    {/* form section */}
                    <div className="p-4 max-h-[1500px] flex flex-col max-w-lg rounded-lg bg-gray-100 text-gray-900">
                        <SubSectionTitle title={'Sign up'}></SubSectionTitle>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.name ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />
                                {errors.name && (
                                    <span className="text-red-600 flex justify-start items-center mt-1">
                                        <FaExclamation /> Name is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.email ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                                {errors.email && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationCircle /> Email is required
                                </span>}
                            </div>

                            {/* photo url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.photoURL ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                                {errors.photoURL && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationCircle />Photo URL is required</span>}
                            </div>

                            {/* password */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type={`${seePass ? 'text' : 'password'}`}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                                    })} placeholder="password" className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.password ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />

                                {seePass ? (
                                    <FaEye
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(false)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(true)}
                                    />
                                )}

                                {errors.password?.type === 'required' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must have one Uppercase one lower case and one special character.</span>}

                            </div>
                            {/* confirm password */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input
                                    type={`${seePass ? 'text' : 'password'}`}
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === password || 'Passwords do not match',
                                    })} placeholder="password" className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.confirmPassword ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />

                                {seePass ? (
                                    <FaEye
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(false)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(true)}
                                    />
                                )}

                                {errors.confirmPassword?.type === 'required' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password Confirmation is required</span>}
                                {errors.confirmPassword && password && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle />Password and Confirm Password do not match</span>}


                            </div>
                            <div className="form-control mt-6">
                                <PrimaryBtn type={'submit'}
                                    label={'Sign up'} className="btn btn-primary" value="Sign Up" />
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Already have an account?{' '}
                                <Link
                                    to='/login'
                                    className='hover:underline text-blue-500'
                                >
                                    Login
                                </Link>
                                .
                            </p>
                        </form>
                        <div className="divider text-sm"> Sign in with social accounts</div>
                        <div

                            className='mx-auto my-2 '
                        >
                            <button onClick={handleGoogleLogin} className="btn btn-outline "><FcGoogle size={30} />Continue with Google</button>
                        </div>
                    </div>
                    {/* img */}
                    <div className="my-auto hidden md:block">
                        <img className="md:w-11/12 max-w-xl pb-5" src={imageSignUp} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignUp;