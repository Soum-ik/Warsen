import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import SubNavbar from "../pages/Navbar/SubNavbar";
import { useLocation } from "react-router-dom";

export const Layout = () => {
    const location = useLocation();
    return <div>
        <Navbar />
        <SubNavbar />
        <h1 className="container text-center text-2xl font-bold min-h-[80vh] mx-auto flex items-center justify-center">This page is under construction: {location.pathname}</h1>
        <Footer />
    </div>;
};
