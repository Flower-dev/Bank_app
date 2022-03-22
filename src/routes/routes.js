// routes
import { Switch, Route } from "react-router-dom";
// autorization
import AuthRoute from "../guards/AuthRoute";
// pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';

// --------------------------------

export default function Routes() {
    return (
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <AuthRoute>
                <User />
              </AuthRoute>
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
    )
}