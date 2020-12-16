import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import List from './List';
import Update from './Update';

export default function Meals() {

    return <Switch>
        <Route component={Create} exact path="/meals/create"/>
        <Route component={List} exact path="/meals"/>
        <Route component={Update} exact path="/meals/:id"/>
    </Switch>;

}