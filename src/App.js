import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Authentication from './layout/Authentication/Authentication';
import PatientRouter from './pages/patient/PatientRouter';
import MedicRouter from './pages/medic/MedicRouter';
import axiosMock from "./client/axiosMock/axiosMock";
import Home from "./layout/Home/Home";

class App extends Component {
  render() {
    axiosMock;
    return (
      <Switch>
        <Route path="/patient" component={PatientRouter} />
        <Route path="/medic" component={MedicRouter} />
        <Route path="/login" render={() => <Redirect to="/auth/login"/>}/>
        <Route path="/register" render={() => <Redirect to="/auth/register"/>}/>
        <Route path="/reset" render={() => <Redirect to="/auth/reset"/>}/>
        <Route path="/auth" component={Authentication}/>
        <Route path="/404" render={() => <div>not match</div>}/>
        <Route path="/" component={Home}/>
      </Switch>
    );
  }
}

export default App;
