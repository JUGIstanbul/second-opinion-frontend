import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateCase from './CreateCase/CreateCase';
import Account from './Account/Account';
import MyCases from './MyCases/MyCases';

export default function PatientRouter({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/cases`} component={MyCases} />
      <Route path={`${match.url}/account`} component={Account} />
      <Route path={`${match.url}/createcase`} component={CreateCase} />

      <Route path={match.url} render={() => <Redirect to="/patient/cases" />} />
    </Switch>
  );
}
