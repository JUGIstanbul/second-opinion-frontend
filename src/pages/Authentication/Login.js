import React, { Component } from 'react';
import { FormField, Button } from '../../components/common';
import { control } from '../../utils/form';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { auth } from '../../store/action/auth';

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
      <div>
        <FormField type="text" label="Username" {...control(this, 'username')} />
        <FormField type="password" label="Password" {...control(this, 'password')} />
        <Button primary label="LOGIN" onClick={this.onLogin} />
      </div>
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
