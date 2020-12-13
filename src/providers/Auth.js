import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {

    const [state, setState] = useState({
        isAuthenticated: false,
        login: handleLogin,
    });

    useEffect(() => {
        const auth = firebase.auth();
        auth.onAuthStateChanged(user => {
            setState(prevState => ({
                ...prevState,
                isAuthenticated: true,
                user,
            }));
        });
    }, []);

    function handleLogin() {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return <AuthContext.Provider value={state}>
        {children}
    </AuthContext.Provider>;

}