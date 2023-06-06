import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mainLogo from '../../assets/cinema.png'
import { HiOutlineBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { Tooltip } from 'react-tooltip'
import Container from "../Container/Container";
import Lottie from "lottie-react";
import avatar from '../../assets/wired-lineal-21-avatar.json'

const Navbar = () => {
    const user = null;
    const [dropMenu, setDropMenu] = useState(false)
    // console.log(dropMenu);

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
                    to='/'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Instructors
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Classes
                </NavLink>
            </li>
        </ul>

    </>
    return (
        <header className="bg-white py-4 fixed w-full z-10 shadow-md">
            <Container>
                <div className="flex flex-col md:flex-row justify-between">
                    {/* logo & brand name */}
                    <div className="flex gap-2 mx-auto md:ml-0  items-center">
                        <Link to='/'><img className="w-16 py-1" src={mainLogo} alt="logo" /></Link>
                        <h3>Cinematic Arts Institute</h3>
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

                                <div className="flex justify-center items-center">
                                    {
                                        user && <Link to={'/'}><button className="btn btn-outline rounded-3xl mx-2"> Dashboard</button></Link>
                                    }

                                    <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${user && 'online'}`} data-tooltip-id="my-tooltip"
                                        data-tooltip-content={`${user ? user : 'Sign up/Login'}`}
                                        data-tooltip-place="top">
                                        <div
                                            className={`w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}
                                            data-tip={`${user && user.name}`}
                                            data-place="left"
                                        >
                                            {user ? <img src="" alt="" /> : <Lottie className="" animationData={avatar} />}
                                        </div>
                                    </label>
                                </div>

                                <Tooltip id="my-tooltip" place="left" />
                                {/* user dropdown */}
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-indigo-50">
                                    <li>
                                        {
                                            user ? <Link to='/' className="justify-between hover:bg-slate-300">
                                                Dashboard
                                            </Link> : <Link to='/' className="justify-between hover:bg-slate-300">
                                                Sign up
                                            </Link>
                                        }
                                    </li>
                                    <li></li>
                                    <>
                                        {
                                            user ?
                                                <button className="btn btn-active btn-primary">LogOut</button>
                                                : <NavLink
                                                    to='/login'
                                                    className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-outline btn-primary')}
                                                >
                                                    Login
                                                </NavLink>
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