import { Route, Switch } from 'react-router-dom';
import List from './List';

export default function Stores() {

    return <Switch>
        <Route component={List} exact path="/stores"/>
    </Switch>

}