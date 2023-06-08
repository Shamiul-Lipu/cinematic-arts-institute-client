import { FaTasks, FaThList, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const UserNav = () => {
    return (
        <div>
            <ul className='py-5 font-bold text-base text text-w'>
                <hr />
                <li><Link to="/dashboard/my-selected-classes"><FaTasks></FaTasks> My Selected Classes</Link> </li>
                <hr />

                <li><Link to="/dashboard/my-enrolled-classes"><FaThList></FaThList> My Enrolled Classes</Link> </li>
                <hr />

                <li><Link to="/dashboard/payment-history"><FaMoneyCheckAlt></FaMoneyCheckAlt>Payment History</Link> </li>
                <hr />
            </ul>
        </div>
    );
};

export default UserNav;