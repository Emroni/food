import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

export const DatabaseContext = createContext(null);

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({children}) {

    const [data, setData] = useState({
        meals: [],
        restaurants: [],
    });
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        const db = firebase.firestore();

        const get = (collection, orderBy) => {
            return db.collection(collection)
                .orderBy(orderBy)
                .onSnapshot((col) => {
                    const list = [];

                    col.forEach((doc) => {
                        const data = doc.data();
                        data.id = doc.id;
                        list.push(data);
                    });

                    setData(prevState => ({
                        ...prevState,
                        [collection]: list,
                    }));

                    setLoaded(prevState => prevState + 1);
                });
        }

        get('meals', 'name');
        get('restaurants', 'name');
    }, []);

    function add(collection, data) {
        const db = firebase.firestore();
        return db.collection(collection)
            .add(data);
    }

    function find(collection, id) {
        return data[collection].find(doc => doc.id === id);
    }

    function remove(collection, doc) {
        const db = firebase.firestore();
        return db.collection(collection)
            .doc(doc)
            .delete();
    }

    function update(collection, doc, data) {
        const db = firebase.firestore();
        return db.collection(collection)
            .doc(doc)
            .update(data);
    }

    const value = {
        ...data,
        add,
        find,
        loading: loaded < 2,
        remove,
        update,
    };

    return <DatabaseContext.Provider value={value}>
        {children}
    </DatabaseContext.Provider>;

}