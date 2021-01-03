import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';

export default function Auth() {

    return <Switch>
        <Route component={Login} exact path="/auth/login"/>
        <Redirect to="/auth/login"/>
    </Switch>;

}