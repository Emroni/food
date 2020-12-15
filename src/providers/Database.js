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
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        const db = firebase.firestore();
        const get = (name) => {
            const collection = `${name}s`;
            db.collection(collection)
                .orderBy('name')
                .onSnapshot((col) => {
                    const hash = {};
                    const list = [];

                    col.forEach((doc) => {
                        const data = doc.data();
                        data.id = doc.id;
                        data.collection = collection;
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

    function add(collection, data) {
        const db = firebase.firestore();
        db.collection(collection)
            .add(data);
    }

    function remove(collection, doc) {
        const db = firebase.firestore();
        db.collection(collection)
            .doc(doc)
            .delete();
    }

    function update(collection, doc, data) {
        const db = firebase.firestore();
        db.collection(collection)
            .doc(doc)
            .update(data);
    }

    if (loaded < 4) {
        return <div className="flex h-screen items-center justify-center">
            <div className="text-3xl">Loading</div>
        </div>;
    }

    const value = {
        ...data,
        add,
        remove,
        update,
    };

    return <DatabaseContext.Provider value={value}>
        {children}
    </DatabaseContext.Provider>;

}