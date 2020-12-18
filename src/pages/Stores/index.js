import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';

export default function Stores() {

    return <Switch>
        <Route component={Edit} exact path="/stores/create"/>
        <Route component={List} exact path="/stores"/>
        <Route component={Edit} exact path="/stores/:id"/>
    </Switch>;

}