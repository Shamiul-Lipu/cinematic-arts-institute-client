import { FaTasks, FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorNav = () => {
    return (
        <div>
            <ul className='py-5 font-bold text-base text text-w'>
                <hr />
                <li><Link to="/dashboard/add-class"><FaTasks></FaTasks> Add a Class</Link> </li>
                <hr />

                <li><Link to="/dashboard/my-classes"><FaThList></FaThList> My Classes</Link> </li>
                <hr />
            </ul>
        </div>
    );
};

export default InstructorNav;