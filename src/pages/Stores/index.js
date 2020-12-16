import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import List from './List';
import Update from './Update';

export default function Stores() {

    return <Switch>
        <Route component={Create} exact path="/stores/create"/>
        <Route component={List} exact path="/stores"/>
        <Route component={Update} exact path="/stores/:id"/>
    </Switch>;

}