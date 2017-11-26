import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import LandingPage from './pages/landing/LandingPage';
import Authentication from './layout/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <Redirect to="/auth/login" />} />
        <Route path="/register" render={() => <Redirect to="/auth/register" />} />
        <Route path="/reset" render={() => <Redirect to="/auth/reset" />} />
        <Route path="/auth" component={Authentication} />
        <Route path="/404" render={() => <div>not match</div>} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
