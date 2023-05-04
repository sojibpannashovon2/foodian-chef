// import React from 'react';

import { createContext } from "react";


export const authProvider = createContext(null)

const AuthProvider = ({ children }) => {


    const authInfo = {

    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;