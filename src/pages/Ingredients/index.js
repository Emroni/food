import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import List from './List';
import Update from './Update';

export default function Ingredients() {

    return <Switch>
        <Route component={Create} exact path="/ingredients/create"/>
        <Route component={List} exact path="/ingredients"/>
        <Route component={Update} exact path="/ingredients/:id"/>
    </Switch>;

}