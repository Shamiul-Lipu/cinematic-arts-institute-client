import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage.jsx/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../layout/DashboardLayout";
import SelectedClasses from "../pages/Dashboard/User/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/User/EnrolledClasses/EnrolledClasses";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/User/Payment/PaymentHistory";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/instructors', element: <Instructors /> },
            { path: '/classes', element: <Classes /> }
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: '/dashboard/my-selected-classes', element: <SelectedClasses /> },
            { path: '/dashboard/my-enrolled-classes', element: <EnrolledClasses /> },
            { path: '/dashboard/course-payment', element: <Payment /> },
            { path: '/dashboard/payment-history', element: <PaymentHistory /> },
            // admin
            { path: '/dashboard/manage-users', element: <ManageUsers /> }
        ]
    }
]);

export default router;