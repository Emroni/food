import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import List from './List';

export default function Ingredients() {

    return <Switch>
        <Route component={List} exact path="/ingredients"/>
        <Route component={Create} exact path="/ingredients/create"/>
    </Switch>;

}