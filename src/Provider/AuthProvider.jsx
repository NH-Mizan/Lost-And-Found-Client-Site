import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)


    // Google signIn Method =====================================
    const provider = new GoogleAuthProvider();
    const handleGoogleSinInAuth = () => {

        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user)

            })
    }

     // Create user method=======================================
     const createUserAuth = (email, password) => {
        // setLodar(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
        
    const updateUserDashboard = (updateData) => {


        return updateProfile(auth.currentUser, updateData)



    }




    // LogIn With Email and Password Method=====================

    const userLoginAuth = (email, password) => {

     return signInWithEmailAndPassword(auth, email, password)
    }

     // Log Out user Method========== 
     const logOut = () => {

        return signOut(auth)
    }


    
    // user data change to currentuser Show And change store data method ==========
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // setLodar(false);

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
        updateUserDashboard


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