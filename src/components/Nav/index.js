import { NavLink } from 'react-router-dom';
import { useDatabase } from '../../providers';
import EditToggle from './EditToggle';
import Login from './Login';

export function Nav() {

    const db = useDatabase();

    const nav = {
        meals: 'Meals',
        ingredients: 'Ingredients',
        restaurants: 'Restaurants',
        stores: 'Stores',
    };

    return <nav className="bg-gray-900 leading-none text-white ">
        <div className="container flex mx-auto justify-between">
            <div className="flex">
                {Object.entries(nav)
                    .map(([key, name], index) =>
                        <NavLink activeClassName="bg-opacity-10 bg-white" className="block p-3 hover:text-opacity-70" key={index} to={`${key}`}>
                            {name}
                        </NavLink>)}
            </div>
            <div>
                {db.isAuthenticated ?
                    <EditToggle/> :
                    <Login/>}
            </div>
        </div>
    </nav>;

}