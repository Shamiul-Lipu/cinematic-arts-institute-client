import { FaTasks, FaThList, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorNav = () => {
    return (
        <div>
            <ul className='py-5 font-bold text-base text text-w'>
                <hr />
                <li><Link to="/dashboard/my-selected-classes"><FaTasks></FaTasks> Instructor</Link> </li>
                <hr />

                <li><Link to="/dashboard/my-enrolled-classes"><FaThList></FaThList> Instructor</Link> </li>
                <hr />

                <li><Link to="/dashboard/payment-history"><FaMoneyCheckAlt></FaMoneyCheckAlt>Instructor</Link> </li>
                <hr />
            </ul>
        </div>
    );
};

export default InstructorNav;