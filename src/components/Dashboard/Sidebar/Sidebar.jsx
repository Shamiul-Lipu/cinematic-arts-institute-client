import { NavLink } from 'react-router-dom';
import mainLogo from '../../../assets/cinema.png'
import { FaHome, FaUsers, FaSpellCheck } from "react-icons/fa";
import UserNav from './UserNav';

const Sidebar = () => {
    return (
        <>
            <div>
                <div className="text-center bg-indigo-50 py-2 rounded-lg">
                    {/* img */}
                    <img className='w-1/4 mx-auto' src={mainLogo} />
                    <h3>Cinematic Arts Institute</h3>
                </div>
                {/* Common navbar */}
                <ul className='py-4 font-bold text-base text text-w'>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <hr />
                    <li><NavLink to="/instructors"><FaUsers></FaUsers> Instructors</NavLink> </li>
                    <hr />
                    <li><NavLink to="/classes"><FaSpellCheck></FaSpellCheck> Classes</NavLink> </li>

                </ul>

                <div className="divider"></div>

                {/* conditional navbar */}
                {
                    <UserNav></UserNav>
                }
            </div>
        </>
    );
};

export default Sidebar;
