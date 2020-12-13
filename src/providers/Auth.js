import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {

    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = firebase.auth();
        auth.onAuthStateChanged(setUser);
    }, []);

    function login(email, password) {
        setAuthenticating(true);
        setError(null);

        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
            .then(credentials => {
                setAuthenticating(false);
                setUser(credentials.user);
            })
            .catch(e => {
                setAuthenticating(false);
                setError(e.message);
            });
    }

    const value = {
        authenticating,
        error,
        login,
        user,
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;

}