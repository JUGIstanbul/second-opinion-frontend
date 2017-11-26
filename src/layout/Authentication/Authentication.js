import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {AppBar, Button, Drawer, FlatButton, FontIcon, IconButton, Toolbar, Typography} from 'material-ui';
import './Authentication.css';
import Footer from "../../components/Footer/Footer";
import Login from '../../pages/Authentication/Login';
import Register from '../../pages/Authentication/Register';
import ResetPassword from '../../pages/Authentication/ResetPassword';
import SetPassword from '../../pages/Authentication/SetPassword';
import Sidebar from '../../layout/Sidebar/Sidebar';
import LandingPage from "../../pages/landing/LandingPage";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    const buttonStyle = {
      color: 'white',
      backgroundColor: 'transparent'
    };
    const drawerOverlay = {
      position: 'absolute',
      left: '0',
      top: '0',
      backgroundColor: 'black',
      opacity: '.7',
      width: '100%',
      height: '100%',
      zIndex: 1101,
      display: 'none'
    };
    return (
      <div>
        <Drawer overlayStyle={{backgroundColor: "yellow", opacity: 0.4}} open={this.state.open}>
          <Sidebar/>
        </Drawer>
        <div onClick={this.handleToggle}
             style={this.state.open ? {...drawerOverlay, display: 'block'} : {...drawerOverlay}}/>
        <AppBar position={'static'}
          title={<span>Title</span>}
          /*iconElementLeft={
            <IconButton aria-label="Menu" onClick={this.handleToggle}>
              <MenuIcon />
            </IconButton>
            }*/>
          <Toolbar>
            <IconButton  color="contrast" aria-label="Menu">
            
            </IconButton>
            <Typography type="title" color="inherit" style={{
              flex: 1
            }}>
              Title
            </Typography>
            <div style={{padding: '12px 0'}}>
              <Button style={buttonStyle} href="/login">Login</Button>
              <Button style={buttonStyle}href="/register">Register</Button>
              <Button style={buttonStyle}>EN</Button>
            </div>
          </Toolbar>
          
        </AppBar>
        <div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
          <Switch>
            <Route path={`${this.props.match.url}/login`} component={Login}/>
            <Route path={`${this.props.match.url}/register`} component={Register}/>
            <Route path={`${this.props.match.url}/reset`} component={ResetPassword}/>
            <Route path={`${this.props.match.url}/set-password`} component={SetPassword}/>
            <Route
              path={this.props.match.url}
              render={() => <Redirect to="/auth/login"/>}
            />
            <Route path={`${this.props.match.url}/set-password`} component={LandingPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default Authentication;
