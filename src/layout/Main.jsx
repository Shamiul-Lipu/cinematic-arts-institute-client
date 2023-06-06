import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-36 md:pt-24">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;