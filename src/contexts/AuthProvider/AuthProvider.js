import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

     const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }
     const googleLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
     const logOut = () =>{
        setLoading(true)
        localStorage.removeItem('health-token');
        return signOut(auth);
     }
     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log("user from auth state ", currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe();
        }
     }, [])

    const authInfo = {
        user,
        createAUser,
        login,
        loading,
        googleLogin,
        logOut

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
