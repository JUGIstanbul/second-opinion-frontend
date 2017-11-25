import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Authentication.css';

export default function Authentication({ match }) {
  return (

          <Switch>
            <Route path={`${match.url}/login`} component={<div>Test</div>} />
            <Route path={`${match.url}/register`} component={<div>Test</div>} />
            <Route path={`${match.url}/reset`} component={<div>Test</div>} />
            <Route path={`${match.url}/set-password`} component={<div>Test</div>} />
            <Route
              path={match.url}
              render={() => <Redirect to="/auth/login" />}
            />
          </Switch>

  );
}
