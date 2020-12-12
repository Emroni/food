import { Route, Switch, Redirect } from 'react-router-dom';
import Ingredients from './Meals';
import Meals from './Meals';
import Restaurants from './Meals';
import Stores from './Meals';
import { Nav } from '../components';

export default function Pages() {

    return <>
        <Nav/>
        <main>
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