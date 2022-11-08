import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createAUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

     const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
     }
     const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
     const logOut = () =>{
        return signOut(auth);
     }
     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return () =>{
            return unsubscribe();
        }
     }, [])

    const authInfo = {
        user,
        createAUser,
        login,
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
