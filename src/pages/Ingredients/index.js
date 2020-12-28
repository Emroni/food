import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import List from './List';
import Read from './Read';

export default function Ingredients() {

    return <Switch>
        <Route component={List} exact path="/ingredients"/>
        <Route component={Edit} exact path="/ingredients/create"/>
        <Route component={Read} exact path="/ingredients/:id"/>
        <Route component={Edit} exact path="/ingredients/:id/update"/>
    </Switch>;

}