import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage.jsx/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/instructors', element: <Instructors /> }
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> }
]);

export default router;