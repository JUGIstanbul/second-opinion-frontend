import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormField} from "../../components/common";
import {control} from "../../utils/form";

import {auth} from '../../store/action/auth';
import {Button, FormControl, Grid} from "material-ui";


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
      
        <Grid item xs={12}   direction={'Row'}>
          <Button raised color="primary" onClick={this.onLogin}>LOGIN</Button>
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
