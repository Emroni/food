import { Route, Switch } from 'react-router-dom';
import List from './List';

export default function Ingredients() {

    return <Switch>
        <Route component={List} exact path="/ingredients"/>
    </Switch>;

}