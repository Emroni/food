import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth, useDatabase } from '../providers';
import { Loader, Nav } from '../components';
import Auth from './Auth';
import Meals from './Meals';
import Restaurants from './Restaurants';

export default function Pages() {

    const auth = useAuth();
    const db = useDatabase();

    if (!auth.ready) {
        return <div className="pt-8 text-center text-5xl">
            <Loader/>
        </div>;
    }

    if (!auth.user) {
        return <Auth/>;
    }

    return <div className={db.loading ? 'pointer-events-none' : ''}>
        <Nav/>
        <main className="container mx-auto p-3 sm:py-4 md:py-5 lg:py-6">
            {db.loading ?
                <div className="pt-8 text-center text-5xl">
                    <Loader/>
                </div> :
                <Switch>
                    <Route component={Meals} path="/meals"/>
                    <Route component={Restaurants} path="/restaurants"/>
                    <Redirect to="/meals"/>
                </Switch>}
        </main>
    </div>;

}