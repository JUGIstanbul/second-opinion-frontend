import React, { Component } from 'react';
import { FormField } from '../../components/common';
import { control } from '../../utils/form';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import {auth} from '../../store/action/auth';
import {Button, Card, CardMedia, FormControl, Grid, Paper} from "material-ui";


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

      <Grid container  spacing={24} alignContent={'center'} alignItems={'center'} style={{textAlign: 'center'}}>
        <Grid item xs={12}  direction={'Row'} >
          <FormField
            type="text"
            label="Username"
            {...control(this, 'username')}
          />
        </Grid>
        <Grid item xs={12}  direction={'Row'}>
          <FormField
            type="password"
            label="Password"
            {...control(this, 'password')}
          />
        </Grid>
        <Grid item xs={12}  direction={'Row'}>
          <FormField
            type="email"
            label="E-Mail"
            {...control(this, 'email')}
          />
        </Grid>
        <Grid item xs={12}  direction={'Row'}>
          <FormField
            type="number"
            label="Phone"
            {...control(this, 'phone')}
          />
        </Grid>
        <Grid item xs={12}   direction={'Row'}>
          <Button raised color="primary" onClick={this.onRegister}>Register</Button>
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
