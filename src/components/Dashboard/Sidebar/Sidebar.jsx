import { NavLink } from 'react-router-dom';
import mainLogo from '../../../assets/cinema.png'
import { FaHome, FaUsers, FaSpellCheck } from "react-icons/fa";
import UserNav from './UserNav';
import { Fade } from "react-awesome-reveal";
import useAdmin from '../../../hooks/useAdmin';
import AdminNav from './AdminNav';
import useInstructor from '../../../hooks/useInstructor';
import InstructorNav from './InstructorNav';
import { useContext } from 'react'
import { AuthContext } from "../../../provider/AuthProvider";

const Sidebar = () => {
    const { user, role, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

    // console.log(isInstructor, isAdmin, isAdminLoading, isInstructorLoading);
    // user && role && console.log(role);


    return (
        <>
            <div>
                <div className="text-center bg-indigo-50 py-2 rounded-lg">
                    {/* img */}
                    <img className='w-1/4 mx-auto' src={mainLogo} />
                    <h3>Cinematic Arts Institute</h3>
                </div>
                {/* Common navbar */}
                <Fade duration='2000'>
                    <ul className='py-4 font-bold text-base text text-w'>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <hr />
                        <li><NavLink to="/instructors"><FaUsers></FaUsers> Instructors</NavLink> </li>
                        <hr />
                        <li><NavLink to="/classes"><FaSpellCheck></FaSpellCheck> Classes</NavLink> </li>

                    </ul>
                </Fade>

                <div className="divider"></div>

                {/* conditional nav for dashboard */}
                <Fade duration='3000'>
                    {
                        // isAdmin ? <AdminNav></AdminNav> : isInstructor ? <InstructorNav></InstructorNav> : <UserNav></UserNav>
                        // isAdminLoading || isInstructorLoading
                        //     ? <div className='text-center '><span className="loading loading-ring loading-lg"></span></div>
                        //     : user && role && !loading
                        //         ? role === 'admin'
                        //             ? <AdminNav></AdminNav>
                        //             : <InstructorNav></InstructorNav>
                        //         : <UserNav></UserNav>

                        isAdminLoading || isInstructorLoading
                            ? <div className='text-center '><span className="loading loading-ring loading-lg"></span></div>
                            : user && role && !loading
                                ? role === 'student'
                                    ? <UserNav></UserNav> :
                                    role === 'admin'
                                        ? <AdminNav></AdminNav>
                                        : <InstructorNav></InstructorNav>
                                : ''
                    }
                </Fade>

            </div>
        </>
    );
};

export default Sidebar;
