// import React from 'react';

import { Outlet } from "react-router-dom";
import NavberPd from "../pages/shared/NavberPd";

const LogInLayOut = () => {
    return (
        <div>
            <NavberPd></NavberPd>
            <Outlet></Outlet>
        </div>
    );
};

export default LogInLayOut;