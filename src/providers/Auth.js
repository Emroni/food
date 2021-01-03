import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {

    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState(null);
    const [ready, setReady] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = firebase.auth();
        const db = firebase.firestore();
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthenticating(true);
                db.collection('users')
                    .doc(user.uid)
                    .get()
                    .then((doc) => {
                        setUser({
                            ...(doc.data() || {}),
                            email: user.email,
                            uid: user.uid,
                        });
                        setAuthenticating(false);
                        setReady(true);
                    });
            } else {
                setReady(true);
                setUser(null);
            }
        });
    }, []);

    function login(email, password) {
        setAuthenticating(true);
        setError(null);

        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
            .catch(e => {
                setAuthenticating(false);
                setError(e.message);
            });
    }

    function logout() {
        const auth = firebase.auth();
        auth.signOut();
    }

    const value = {
        authenticating,
        error,
        login,
        logout,
        ready,
        user,
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;

}