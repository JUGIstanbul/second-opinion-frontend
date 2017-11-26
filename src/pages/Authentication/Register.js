import React, { Component } from 'react';
import { FormField } from '../../components/common';
import { control } from '../../utils/form';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { auth } from '../../store/action/auth';
import { Button, Card, CardMedia, Grid, Paper } from 'material-ui';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      phone: '',
      isSignIn: false,
    };

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(e) {
    this.props.auth(this.state);
  }

  render() {
    return (
      <Grid container style={{ flex: 1 }}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems={'stretch'}
            direction={'row'}
            justify={'flex-start'}
            spacing={0}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Card style={{ height: '100%' }}>
                <CardMedia image="/images/landing-page.jpg" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ height: '100%' }}>
                <FormField type="text" label="Username" {...control(this, 'username')} />
                <FormField type="password" label="Password" {...control(this, 'password')} />
                <FormField type="email" label="E-Mail" {...control(this, 'email')} />
                <FormField type="number" label="Phone" {...control(this, 'phone')} />

                <Button raised color="primary" onClick={this.onRegister}>
                  REGISTER
                </Button>
              </Paper>
            </Grid>
          </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
