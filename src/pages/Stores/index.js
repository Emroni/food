import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';
import Read from './Read';

export default function Stores() {

    return <Switch>
        <Route component={Edit} exact path="/stores/create"/>
        <Route component={List} exact path="/stores"/>
        <Route component={Read} exact path="/stores/:id"/>
        <Route component={Edit} exact path="/stores/:id/update"/>
    </Switch>;

}