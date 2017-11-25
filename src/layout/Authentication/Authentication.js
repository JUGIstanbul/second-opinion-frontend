import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Authentication.css';
import Login from '../../pages/Authentication/Login';
import Register from '../../pages/Authentication/Register';
import ResetPassword from '../../pages/Authentication/ResetPassword';
import SetPassword from '../../pages/Authentication/SetPassword';


export default function Authentication({ match }) {
  return (

          <Switch>
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/register`} component={Register} />
            <Route path={`${match.url}/reset`} component={ResetPassword} />
            <Route path={`${match.url}/set-password`} component={SetPassword} />
            <Route
              path={match.url}
              render={() => <Redirect to="/auth/login" />}
            />
          </Switch>

  );
}
