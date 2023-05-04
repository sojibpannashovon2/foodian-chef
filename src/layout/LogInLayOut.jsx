// import React from 'react';

import { Outlet } from "react-router-dom";
import NavberPd from "../pages/shared/NavberPd";
import Footer from "../pages/shared/Footer";

const LogInLayOut = () => {
    return (
        <div>
            <NavberPd></NavberPd>
            <Outlet></Outlet>
            <div className="container"> <Footer></Footer></div>
        </div>
    );
};

export default LogInLayOut;