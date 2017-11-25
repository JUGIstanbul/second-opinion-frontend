import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Authentication  from './layout/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <Redirect to="/auth/login"/>}/>
        <Route path="/register" render={() => <Redirect to="/auth/register"/>}/>
        <Route path="/reset" render={() => <Redirect to="/auth/reset"/>}/>
        <Route path="/auth" component={Authentication}/>
        <Route path="/404" render={() => <div>not match</div>}/>
        <Route path="/" component={() => <div>Fuck you fuck!!</div>}/>
      </Switch>
    );
  }
}

export default App;
