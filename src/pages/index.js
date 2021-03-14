import { Redirect, Route, Switch } from 'react-router-dom';
import { Nav } from '../components';
import Meals from './Meals';
import Restaurants from './Restaurants';

export default function Pages() {

    return <>
        <Nav/>
        <main className="container mx-auto p-3 sm:py-4 md:py-5 lg:py-6">
            <Switch>
                <Route component={Meals} path="/meals"/>
                <Route component={Restaurants} path="/restaurants"/>
                <Redirect to="/meals"/>
            </Switch>
        </main>
    </>;

}