import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Authentication.css';
import Login from '../../pages/Authentication/Login';

export default function Authentication({ match }) {
  return (

          <Switch>
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/register`} component={() => <div>Fuck you fuck!!</div>} />
            <Route path={`${match.url}/reset`} component={() => <div>Fuck you fuck!!</div>} />
            <Route path={`${match.url}/set-password`} component={() => <div>Fuck you fuck!!</div>} />
            <Route
              path={match.url}
              render={() => <Redirect to="/auth/login" />}
            />
          </Switch>

  );
}
