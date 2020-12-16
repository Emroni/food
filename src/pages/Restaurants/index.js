import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import List from './List';
import Update from './Update';

export default function Restaurants() {

    return <Switch>
        <Route component={Create} exact path="/restaurants/create"/>
        <Route component={List} exact path="/restaurants"/>
        <Route component={Update} exact path="/restaurants/:id"/>
    </Switch>;

}