import { FaUsersCog, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNav = () => {
    return (
        <div>
            <ul className='py-5 font-bold text-base text text-w'>
                <hr />
                <li><Link to="/dashboard/manage-users"><FaUsersCog></FaUsersCog> Manage Users</Link> </li>
                <hr />

                <li><Link to="/dashboard/manage-classes"><FaEdit></FaEdit> Manage Classes</Link> </li>
                <hr />
            </ul>
        </div>
    );
};

export default AdminNav;