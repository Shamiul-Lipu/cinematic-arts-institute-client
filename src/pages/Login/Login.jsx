import imageLogIn from '../../assets/images/login.jpg'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaEye, FaEyeSlash, FaExclamationTriangle, FaExclamationCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import SectionTitle from '../../components/Titles/SectionTitle';
import SubSectionTitle from '../../components/Titles/SubSectionTitle';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import useTitle from '../../hooks/useTitle';
import { Tooltip } from 'react-tooltip';


const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [seePass, setSeePass] = useState(false);
    const [error, setError] = useState("");
    const { signInWithGoogle, signInUser, role } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        signInUser(data.email, data.password)
            .then(result => {
                const currentUser = result.user;
                // console.log(currentUser)
                reset();
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfull',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                // console.log(error);
            })
    };

    // Google Login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                const userData = { name: loggedInUser.displayName, email: loggedInUser.email }
                axios.post(`${import.meta.env.VITE_API_URL}/users`, userData)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User Login successfull',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                            // window.location.reload();
                        }
                    })
                    .catch(error => console.error('Error from Signup page Post:', error));
                console.log(role);
                // if(role !== 'admin' || role !== '')
                navigate('/')
                // window.location.reload();
            })
    }


    return (
        <section className="min-h-screen ">
            <SectionTitle titleShort={'Welcome back, Sign in to access your account'}></SectionTitle>
            {/*  */}
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex flex-row justify-center items-center md:grid md:grid-cols-2 ">
                    {/* img */}
                    <div className="my-auto hidden md:block">
                        <img className="md:w-11/12 max-w-xl pb-5" src={imageLogIn} alt="" />
                    </div>
                    {/* form section */}
                    <div className="p-5 max-h-[600px] flex flex-col max-w-lg rounded-lg bg-gray-100 text-gray-900">
                        <SubSectionTitle title={'Login'}></SubSectionTitle>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                            <p className='font-bold text-red-600'>{error}</p>
                            {/* email */}
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

                                    })} placeholder="password" className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.password ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />

                                {seePass ? (
                                    <FaEye
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(false)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
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
                                    <FaExclamationTriangle /> Password must have one Uppercase one lower case, one number and one special character.</span>}
                                <label className="label">
                                    <a href="#" className="text-xs hover:underline text-blue-500">Forgot password?</a>
                                </label>
                            </div>
                            {/* button */}
                            <div className="form-control mt-6" data-tooltip-id="my-tooltip"
                                data-tooltip-content={`To access the full functionality, please sign up first`}
                                data-tooltip-place="bottom">
                                <PrimaryBtn label={'Login'} className="" type="submit" value="Login" />
                                <Tooltip id="my-tooltip" place="left" />
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Don{'\''}t have an account yet?{' '}
                                <Link
                                    to='/signup'
                                    className='hover:underline text-blue-500'
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                        </form>
                        <div className="divider text-sm">Login with social accounts</div>
                        <div

                            className='mx-auto my-2'
                        >
                            <button onClick={handleGoogleLogin} className="btn btn-outline" data-tooltip-id="tooltip"
                                data-tooltip-content={`To access the full functionality, please sign up first`}
                                data-tooltip-place="top"
                            ><FcGoogle size={30} />
                                Continue with Google
                                <Tooltip id="tooltip" place="left" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;