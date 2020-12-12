import { NavLink } from 'react-router-dom';

export function Nav() {

    return <nav className="bg-gray-900">
        <div className="container flex mx-auto">
            <NavLink activeClassName="bg-opacity-10 bg-white" className="block p-3 text-white hover:bg-opacity-10 hover:text-opacity-70" to="/meals">Meals</NavLink>
            <NavLink activeClassName="bg-opacity-10 bg-white" className="block p-3 text-white hover:bg-opacity-10 hover:text-opacity-70" to="/ingredients">Ingredients</NavLink>
            <NavLink activeClassName="bg-opacity-10 bg-white" className="block p-3 text-white hover:bg-opacity-10 hover:text-opacity-70" to="/restaurants">Restaurants</NavLink>
            <NavLink activeClassName="bg-opacity-10 bg-white" className="block p-3 text-white hover:bg-opacity-10 hover:text-opacity-70" to="/stores">Stores</NavLink>
        </div>
    </nav>;

}