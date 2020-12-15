import { Route, Switch } from 'react-router-dom';
import List from './List';

export default function Meals() {

    return <Switch>
        <Route component={List} exact path="/meals"/>
    </Switch>;

}