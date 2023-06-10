import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";
import useStudent from "../hooks/useStudent";


const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <Loader></Loader>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;