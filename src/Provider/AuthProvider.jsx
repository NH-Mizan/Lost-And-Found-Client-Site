import React, { createContext, useState } from 'react';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)


    // Google signIn Method ..........
    const provider = new GoogleAuthProvider();
    const handleGoogleSinInAuth = () => {

        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user)

            })
    }


    const authInfo = {
        user,
        setUser,
        handleGoogleSinInAuth,


    }
    // userLoginAuth,
    //     createUserAuth,
    //     logOut,
    //     lodar,
    //     setLodar,
    //     updateUserDashboard

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;