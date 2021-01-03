import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useAuth } from './Auth';

export const DatabaseContext = createContext(null);

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({children}) {

    const [data, setData] = useState({
        calendar: [],
        meals: [],
        restaurants: [],
    });
    const [loaded, setLoaded] = useState(0);
    const [subscriptions, setSubscriptions] = useState([]);
    const auth = useAuth();

    useEffect(() => {
        if (auth.user) {
            if (!subscriptions.length) {
                const db = firebase.firestore();

                const get = (collection, orderBy, where) => {
                    let subscription = db.collection(collection);

                    if (orderBy) {
                        subscription = subscription.orderBy(orderBy);
                    }

                    if (where) {
                        Object.entries(where)
                            .forEach(([key, value]) => {
                                subscription = subscription.where(key, '==', value);
                            });
                    }

                    return subscription.onSnapshot((col) => {
                        if (auth.user) {
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
                        }
                    });
                }

                setSubscriptions([
                    get('calendar', 'date', {
                        user_uid: auth.user.uid,
                    }),
                    get('meals', 'name', {
                        user_uid: auth.user.uid,
                    }),
                    get('restaurants'),
                ]);
            }
            
        } else if (subscriptions.length) {
            setData({
                calendar: [],
                meals: [],
                restaurants: [],
            });

            subscriptions.forEach(unsubscribe => unsubscribe());
            setSubscriptions([]);
        }
    }, [auth.user, subscriptions]);

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