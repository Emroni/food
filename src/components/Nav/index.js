import { NavLink } from 'react-router-dom';
import { useAuth } from '../../providers';
import { Icon } from '../';
import Login from './Login';

export default function Nav() {

    const auth = useAuth();

    const nav = [
        {
            icon: 'utensils',
            name: 'Meals',
            path: '/meals',
        },
        {
            icon: 'carrot',
            name: 'Ingredients',
            path: '/ingredients',
        },
        {
            icon: 'store',
            name: 'Restaurants',
            path: '/restaurants',
        },
        {
            icon: 'store-alt',
            name: 'Stores',
            path: '/stores',
        },
    ];

    return <nav className="bg-gray-900 leading-none text-white ">
        <div className="container flex mx-auto justify-between">
            <div className="flex">
                {nav.map((item, index) =>
                    <NavLink activeClassName="bg-opacity-10 bg-white" className="block p-3 hover:text-gray-300" key={index} to={item.path}>
                        <Icon name={item.icon}/>
                        <span className="hidden ml-2 sm:inline">{item.name}</span>
                    </NavLink>)}
            </div>
            <div>
                {!auth.user && (
                    <Login/>)}
            </div>
        </div>
    </nav>;

}