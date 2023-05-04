// import React from 'react';

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const authContext = createContext(null);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)

    const [loader, setLoader] = useState(true)

    const creatUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, passord) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, passord)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            return unsuscribed;
        }
    }, [])

    const updateUserProfile = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo

        })


    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)

    }

    const authInfo = {
        user,
        loader,
        creatUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;