import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mainLogo from '../../assets/cinema.png'
import { HiOutlineBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { Tooltip } from 'react-tooltip'
import Container from "../Container/Container";
import Lottie from "lottie-react";
import avatar from '../../assets/wired-lineal-21-avatar.json'
import SecondaryBtn from "../Buttons/SecondaryBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { AuthContext } from "../../provider/AuthProvider";
import { FiMoon, FiSun } from "react-icons/fi";


const Navbar = () => {
    const { user, logOut, role } = useContext(AuthContext)
    const [dropMenu, setDropMenu] = useState(false)
    const [toggle, setToggle] = useState(false)
    // console.log(toggle);

    useEffect(() => {
        toggle ? document.body.className = 'dark-mode' : document.body.className = '';
    }, [toggle])


    // user && role && console.log(role);
    // const [isAdmin]
    // console.log(dropMenu);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    // navitems 
    const navItems = <>
        <ul className={`flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-0 md:gap-4 `}>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/instructors'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Instructors
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/classes'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Classes
                </NavLink>
            </li>
        </ul>

    </>
    return (
        <header className="bg-white py-4 fixed w-full z-10 shadow-md customDark">
            <Container>
                <div className="flex flex-col md:flex-row justify-between">
                    {/* logo & brand name */}
                    <div className="flex gap-2 mx-auto md:ml-0  items-center">
                        <Link to='/'><img className="w-16 py-1" src={mainLogo} alt="logo" /></Link>
                        <h3 className="font-bold text-sky-600 text-xl">Cinematic <span className="font-extrabold text-indigo-900">Arts Institute</span></h3>
                    </div>

                    {/* nav and user */}
                    <nav className="flex gap-2 justify-between md:justify-evenly items-start md:items-center">

                        {/* menu and dropdown*/}
                        <div className="">
                            {/* dropdown toggle button */}
                            <button
                                onClick={() => setDropMenu(!dropMenu)}
                                className={`px-2 py-1 border-[3px] border-stone-600 rounded-lg block md:hidden`}
                            >
                                {dropMenu ? (
                                    <HiXMark
                                        className={`w-6 h-6`}
                                    />
                                ) : (
                                    <HiOutlineBars3BottomLeft
                                        className={`w-6 h-6`}
                                    />
                                )}
                            </button>
                            {/* nav items / menu items*/}
                            <div className={`${dropMenu ? '' : 'hidden md:flex'}`}>
                                {
                                    navItems
                                }
                            </div>
                        </div>

                        {/* User */}
                        <div>
                            <div className="dropdown dropdown-end">

                                <div className="flex justify-center items-center bg-sky-100 pl-2 rounded-3xl ">
                                    {
                                        <button onClick={() => setToggle(!toggle)} className="p-1">
                                            {
                                                toggle ? <FiMoon className="w-9  h-9 mx-1 text-white rounded-full bg-indigo-950 border-[3px] border-indigo-200" />
                                                    : <FiSun className="w-9  h-9 mx-1 text-white rounded-full bg-indigo-200 border-[3px] border-indigo-400" />
                                            }
                                        </button>
                                    }
                                    {/* dashboard button in presence of user */}
                                    {/* visibale Login button on navbar  */}
                                    {
                                        user && role
                                            ? role === 'student' ? <Link to={'/dashboard/my-selected-classes'}><SecondaryBtn label={'Dashboard'}></SecondaryBtn></Link> :
                                                role === 'admin'
                                                    ? <Link to={'/dashboard/manage-users'}><SecondaryBtn label={'Dashboard'}></SecondaryBtn></Link>
                                                    : <Link to={'/dashboard/add-class'}><SecondaryBtn label={'Dashboard'}></SecondaryBtn></Link>
                                            : <Link to={'/login'}><SecondaryBtn label={'Login'} ></SecondaryBtn></Link>
                                    }

                                    <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${user && 'online'} px-1 `} data-tooltip-id="my-tooltip"
                                        data-tooltip-content={`${user ? user?.displayName : 'Sign up/Login'}`}
                                        data-tooltip-place="top">
                                        <div
                                            className={`${user ? 'w-10' : 'w-6'} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}
                                            data-tip={`${user && user?.displayName}`}
                                            data-place="left"
                                        >
                                            {user ? <img src={user?.photoURL} alt="" /> : <Lottie className="" animationData={avatar} />}
                                        </div>
                                    </label>
                                </div>

                                <Tooltip id="my-tooltip" place="left" />
                                {/* user dropdown */}
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-indigo-50 ">
                                    <li className="font-semibold uppercase textBlack">
                                        {
                                            user && role
                                                ? role === 'student' ? <Link to={'/dashboard/my-selected-classes'} className="justify-between hover:bg-sky-200 py-3">Dashboard</Link> :
                                                    role === 'admin'
                                                        ? <Link to={'/dashboard/manage-users'} className="justify-between hover:bg-sky-200 py-3">Dashboard</Link>
                                                        : <Link to='/dashboard/add-class' className="justify-between hover:bg-sky-200 py-3">Dashboard</Link>
                                                : <Link to='/signup' className="justify-between hover:bg-sky-200  py-3">Sign up</Link>
                                        }
                                    </li>
                                    <li></li>
                                    <>
                                        {
                                            user ?
                                                <PrimaryBtn onClick={handleLogOut} label={'Log out'} className=""></PrimaryBtn>
                                                : <Link to='/login'><PrimaryBtn label={'Login'} className=""></PrimaryBtn></Link>
                                        }
                                    </>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;