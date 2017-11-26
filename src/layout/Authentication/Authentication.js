import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from 'material-ui';
import './Authentication.css';
import Login from '../../pages/Authentication/Login';
import Register from '../../pages/Authentication/Register';
import ResetPassword from '../../pages/Authentication/ResetPassword';
import SetPassword from '../../pages/Authentication/SetPassword';
import Layout from '../Layout';

class Authentication extends Component {
  render() {
    return (
      <Layout>
        <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
          <Switch>
            <Route path={`${this.props.match.url}/login`} component={Login} />
            <Route path={`${this.props.match.url}/register`} component={Register} />
            <Route path={`${this.props.match.url}/reset`} component={ResetPassword} />
            <Route path={`${this.props.match.url}/set-password`} component={SetPassword} />
            <Route path={this.props.match.url} render={() => <Redirect to="/auth/login" />} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default Authentication;
