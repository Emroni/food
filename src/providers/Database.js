import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const DatabaseContext = createContext(null);

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({children}) {

    const [loaded, setLoaded] = useState(0);
    const [state, setState] = useState({
        ingredient: {},
        ingredients: [],
        isAuthenticated: false,
        isEditMode: false,
        login: handleLogin,
        meal: {},
        meals: [],
        restaurant: {},
        restaurants: [],
        setEditMode: handleSetEditMode,
        store: {},
        stores: [],
    });

    useEffect(() => {
        const db = firebase.firestore();
        const get = (name) => {
            db.collection(`${name}s`)
                .onSnapshot((col) => {
                    const hash = {};
                    const list = [];

                    col.forEach((doc) => {
                        const data = doc.data();
                        hash[doc.id] = data;
                        list.push(data);
                    });

                    setState(prevState => ({
                        ...prevState,
                        [name]: hash,
                        [`${name}s`]: list,
                    }));

                    setLoaded(prevState => prevState + 1);
                });
        }

        get('ingredient');
        get('meal');
        get('restaurant');
        get('store');
    }, []);

    function handleLogin() {
        setState(prevState => ({
            ...prevState,
            isAuthenticated: true,
        }));
    }

    function handleSetEditMode(value) {
        setState(prevState => ({
            ...prevState,
            isEditMode: value,
        }));
    }

    if (loaded < 4) {
        return <div className="flex h-screen items-center justify-center">
            <div className="text-3xl">Loading</div>
        </div>;
    }

    return <DatabaseContext.Provider value={state}>
        {children}
    </DatabaseContext.Provider>;

}