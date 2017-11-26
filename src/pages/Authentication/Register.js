
import React,{Component} from 'react';
import TextField from '../../components/TextField/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';


class Register extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      
      userName : '',
      userNameRequired : '',
      password: '',
      passwordRequired: '',
      eMail: '',
      eMailRequired: '',
      telephone: '',
      telephoneRequire: ''


    };
  }

  handleChange = (event) => {
    if(event.target.value === "5"){
      this.setState({
        object: event.target.value,
        telephoneRequire : 'Require'
      });
    }
    else{
      this.setState({
        telephoneRequire : '',
        object: event.target.value,
      });
    }
    
   
  };
  
  render() {
    return (
      <div>
        <TextField
          hintText="Username"
          type="text"
          value={this.state.userName}
          errorText={this.state.userNameRequired}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          hintText="Password"
          type="password"
          value={this.state.password}
          errorText={this.state.passwordRequired}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          hintText="Email"
          type="text"
          value={this.state.eMail}
          errorText={this.state.eMailRequired}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          hintText="Telephone"
          type="text"
          errorText={this.state.telephoneRequire}
          value={this.state.telephone}
          onChange={this.handleChange}
        />
       <br/>
        <RaisedButton
         backgroundColor="#a4c639"
          label="SIGN UP" 
           />
      </div>
      
    );
  }
}

export default Register;