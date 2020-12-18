import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';

export default function Ingredients() {

    return <Switch>
        <Route component={Edit} exact path="/ingredients/create"/>
        <Route component={List} exact path="/ingredients"/>
        <Route component={Edit} exact path="/ingredients/:id"/>
    </Switch>;

}