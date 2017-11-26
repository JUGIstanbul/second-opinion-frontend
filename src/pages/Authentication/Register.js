
import React,{Component} from 'react';
import { FormField, Button } from "../../components/common";
import { control } from "../../utils/form";
import {connect} from 'react-redux';
import * as _ from 'lodash';

import {auth} from '../../store/action/auth';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      email : "",
      phone : "",
      isSignIn:false,
    };


    this.onRegister = this.onRegister.bind(this)
  }



  onRegister(e){


    this.props.auth(this.state);


  }




  render() {
    return (
      <div>

        <FormField
          type="text"
          label="Username"
          {...control(this, 'username')}
        />
        <FormField
          type="password"
          label="Password"
          {...control(this, 'password')}
        />
        <FormField
          type="email"
          label="E-Mail"
          {...control(this, 'email')}
        />
        <FormField
          type="number"
          label="Phone"
          {...control(this, 'phone')}
        />
        <Button primary label="Register" onClick={this.onRegister} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

const mapDispatchToProps = {
  auth
};
export default connect(mapStateToProps,mapDispatchToProps)(Register);