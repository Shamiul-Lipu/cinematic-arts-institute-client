import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-36 md:pt-24">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;