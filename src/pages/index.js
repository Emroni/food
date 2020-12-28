import { Redirect, Route, Switch } from 'react-router-dom';
import { useDatabase } from '../providers';
import { Loader, Nav } from '../components';
import Ingredients from './Ingredients';
import Meals from './Meals';
import Restaurants from './Restaurants';
import Stores from './Stores';

export default function Pages() {

    const db = useDatabase();

    return <div className={db.loading ? 'pointer-events-none' : ''}>
        <Nav/>
        <main className="container mx-auto p-3 sm:py-4 md:py-5 lg:py-6">
            {db.loading ?
                <div className="pt-8 text-center text-5xl">
                    <Loader/>
                </div> :
                <Switch>
                    <Route component={Ingredients} path="/ingredients"/>
                    <Route component={Meals} path="/meals"/>
                    <Route component={Restaurants} path="/restaurants"/>
                    <Route component={Stores} path="/stores"/>
                    <Redirect to="/meals"/>
                </Switch>}
        </main>
    </div>;

}