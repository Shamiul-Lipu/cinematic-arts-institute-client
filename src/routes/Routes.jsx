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
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import IsntructorRoute from "./IsntructorRoute";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";


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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: '/dashboard/my-selected-classes', element: <SelectedClasses /> },
            { path: '/dashboard/my-enrolled-classes', element: <PrivateRoute><EnrolledClasses /></PrivateRoute> },
            { path: '/dashboard/course-payment', element: <Payment /> },
            { path: '/dashboard/payment-history', element: <PaymentHistory /> },
            // admin
            { path: '/dashboard/manage-users', element: <AdminRoute><ManageUsers /> </AdminRoute> },
            { path: '/dashboard/manage-classes', element: <AdminRoute><ManageClasses /> </AdminRoute> },
            // instructor
            { path: '/dashboard/add-class', element: <IsntructorRoute><AddClass /></IsntructorRoute> },
            { path: '/dashboard/my-classes', element: <IsntructorRoute><MyClasses /></IsntructorRoute> },
        ]
    }
]);

export default router;