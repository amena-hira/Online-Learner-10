import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const ModeAuthContext = createContext();
const auth = getAuth(app);

const ModeAuthContextProvider = ({children}) => {
    const [mode, setMode] = useState('light');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [coursePDF, setCoursePDF] = useState({});

    const toggleMode = () => {
        if (mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "black"; 
        } else {
          setMode("light");
          document.body.style.backgroundColor = "white";
        }
    };

    const signIn = (email, password) =>{
        return createUserWithEmailAndPassword( auth, email, password )
    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password );
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () =>{
        setUser(null);
        return signOut(auth);
    }



    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    



    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
            
        });
        return unsubscribe;
    },[])

    const modeAuthInfo = {
        mode,
        loading,
        setLoading,
        coursePDF,
        setCoursePDF,
        user,
        toggleMode,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        updateUserProfile,
        login,
        logOut,
    }
    return (
        <ModeAuthContext.Provider value={modeAuthInfo}>
            {children}
        </ModeAuthContext.Provider>
    );
};

export default ModeAuthContextProvider;