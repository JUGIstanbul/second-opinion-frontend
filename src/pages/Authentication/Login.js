import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { FormField } from '../../components/common';
import { control } from '../../utils/form';

import { auth } from '../../store/action/auth';
import { Paper, Grid, Button } from 'material-ui';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSignIn: true,
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    this.props.auth(this.state);
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={8}>
          <Paper>
            <img src="/images/landing-page.jpg" alt="" />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <FormField type="text" label="Username" {...control(this, 'username')} />
            <FormField type="password" label="Password" {...control(this, 'password')} />

            <Button raised color="primary" onClick={this.onLogin}>
              LOGIN
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  auth,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
