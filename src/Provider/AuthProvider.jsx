import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.init';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';


export const AuthContext = createContext()
const auth = getAuth(app)





const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState()
    const [lodar, setLodar] = useState(true)
    console.log(user)

    // Google signIn Method ..........
    const provider = new GoogleAuthProvider();
    const handleGoogleSinInAuth = () => {
        setLodar(true);
        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user)

            })
    }
    // Create user method............
    const createUserAuth = (email, password) => {
        setLodar(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // LogIn With Email and Password Method........
    const userLoginAuth = (email, password) => {
        setLodar(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out user Method========== 
    const logOut = () => {
        setLodar(true);
        return signOut(auth)
    }

    const updateUserDashboard = (updateData) => {


        return updateProfile(auth.currentUser, updateData)



    }



    // user data change to currentuser Show And change store data method ==========
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLodar(false);

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        handleGoogleSinInAuth,
        userLoginAuth,
        createUserAuth,
        logOut,
        lodar,
        setLodar,
        updateUserDashboard

    }




    return (
        <AuthContext.Provider value={authInfo} >
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;