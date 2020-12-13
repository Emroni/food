import { Route, Switch, Redirect } from 'react-router-dom';
import { Nav } from '../components';
import Ingredients from './Ingredients';
import Meals from './Meals';
import Restaurants from './Restaurants';
import Stores from './Stores';

export default function Pages() {

    return <>
        <Nav/>
        <main className="container mx-auto p-3">
            <Switch>
                <Route component={Ingredients} exact path="/ingredients"/>
                <Route component={Meals} exact path="/meals"/>
                <Route component={Restaurants} exact path="/restaurants"/>
                <Route component={Stores} exact path="/stores"/>
                <Redirect to="/meals"/>
            </Switch>
        </main>
    </>;

}