import { Route, Switch } from 'react-router-dom';
import List from './List';

export default function Restaurants() {

    return <Switch>
        <Route component={List} exact path="/restaurants"/>
    </Switch>

}