import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(true)
    console.log(user)


    // Google signIn Method =====================================
    const provider = new GoogleAuthProvider();
    const handleGoogleSinInAuth = () => {
        setLoder(true)

        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user)

            })
    }

     // Create user method=======================================
     const createUserAuth = (email, password) => {
        setLoder(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
        
    const updateUserDashboard = (updateData) => {

        setLoder(true);
        return updateProfile(auth.currentUser, updateData)



    }




    // LogIn With Email and Password Method=====================

    const userLoginAuth = (email, password) => {
        setLoder(true);
     return signInWithEmailAndPassword(auth, email, password)
    }

     // Log Out user Method========== 
     const logOut = () => {
        setLoder(true);
        return signOut(auth)
    }


    
    // user data change to currentuser Show And change store data method ==========
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoder(false);

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
        logOut,
        createUserAuth,
        updateUserDashboard,
        setLoder,
        loder


    }

    //    
    // 
    //     lodar,
    //     setLodar,
    //    

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;