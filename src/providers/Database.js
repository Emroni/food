import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const DatabaseContext = createContext(null);

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({children}) {

    const [loaded, setLoaded] = useState(0);
    const [state, setState] = useState(null);

    useEffect(() => {
        const db = firebase.firestore();
        const get = (collection) => {
            db.collection(collection)
                .onSnapshot((col) => {
                    const data = {};
                    col.forEach((doc) => {
                        data[doc.id] = doc.data();
                    });

                    setState(prevState => ({
                        ...prevState, [collection]: data,
                    }));

                    setLoaded(prevState => prevState + 1);
                });
        }

        get('ingredients');
        get('meals');
        get('restaurants');
        get('stores');
    }, []);

    if (loaded < 4) {
        return <div>Loading</div>;
    }

    return <DatabaseContext.Provider value={state}>
        {children}
    </DatabaseContext.Provider>;

}