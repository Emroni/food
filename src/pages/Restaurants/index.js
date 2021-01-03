import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';

export default function Restaurants() {

    return <Switch>
        <Route component={Edit} exact path="/restaurants/create"/>
        <Route component={List} exact path="/restaurants"/>
        <Route component={Edit} exact path="/restaurants/:id"/>
    </Switch>;

}