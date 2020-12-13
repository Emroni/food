import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const DatabaseContext = createContext(null);

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({children}) {

    const [data, setData] = useState({
        ingredient: {},
        ingredients: [],
        meal: {},
        meals: [],
        restaurant: {},
        restaurants: [],
        store: {},
        stores: [],
    });
    const [editing, setEditing] = useState(false);
    const [loaded, setLoaded] = useState(0);

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

                    setData(prevState => ({
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

    if (loaded < 4) {
        return <div className="flex h-screen items-center justify-center">
            <div className="text-3xl">Loading</div>
        </div>;
    }

    const value = {
        ...data,
        editing,
        setEditing,
    };

    return <DatabaseContext.Provider value={value}>
        {children}
    </DatabaseContext.Provider>;

}