import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';

export default function Meals() {

    return <Switch>
        <Route component={Edit} exact path="/meals/create"/>
        <Route component={List} exact path="/meals"/>
        <Route component={Edit} exact path="/meals/:id"/>
    </Switch>;

}