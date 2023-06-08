import { FaTasks, FaThList, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNav = () => {
    return (
        <div>
            <ul className='py-5 font-bold text-base text text-w'>
                <hr />
                <li><Link to="/dashboard/my-selected-classes"><FaTasks></FaTasks> ADMIN</Link> </li>
                <hr />

                <li><Link to="/dashboard/my-enrolled-classes"><FaThList></FaThList> MADMIN</Link> </li>
                <hr />

                <li><Link to="/dashboard/payment-history"><FaMoneyCheckAlt></FaMoneyCheckAlt>ADMIN</Link> </li>
                <hr />
            </ul>
        </div>
    );
};

export default AdminNav;