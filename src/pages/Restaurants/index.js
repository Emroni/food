import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';
import Read from './Read';

export default function Restaurants() {

    return <Switch>
        <Route component={Edit} exact path="/restaurants/create"/>
        <Route component={List} exact path="/restaurants"/>
        <Route component={Read} exact path="/restaurants/:id"/>
        <Route component={Edit} exact path="/restaurants/:id/update"/>
    </Switch>;

}