import { FaTasks, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserNav = () => {
    return (
        <div>
            <ul className='py-5 font-bold text-base text text-w'>
                <hr />
                <li><NavLink to="/dashboard/my-selected-classes"><FaTasks></FaTasks> My Selected Classes</NavLink> </li>
                <hr />
                <li><NavLink to="/dashboard/my-enrolled-classes"><FaThList></FaThList> My Enrolled Classes</NavLink> </li>
                <hr />
            </ul>
        </div>
    );
};

export default UserNav;