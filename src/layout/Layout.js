import React, {Component} from 'react';
import {AppBar, Button, Drawer, Icon, IconButton, Toolbar, Typography} from 'material-ui';
import Footer from "../components/Footer/Footer";
import Sidebar from './Sidebar/Sidebar';
import {List} from "material-ui-icons";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleToggle = () => {
    this.setState({open: !this.state.open})
  };
  
  render() {
    const buttonStyle = {
      color: 'white',
      backgroundColor: 'transparent'
    };
    return (
      <div>
        <Drawer open={this.state.open} onRequestClose={this.handleToggle}>
          <Sidebar/>
        </Drawer>
       <AppBar position={'static'}
         >
          <Toolbar>
            <IconButton  color="contrast" aria-label="Menu" onClick={this.handleToggle}>
              <Icon>menu</Icon>

            </IconButton>
            <Typography type="title" color="inherit" style={{
              flex: 1
            }}>
              Title
            </Typography>
            <div style={{padding: '12px 0'}}>
              <Button style={buttonStyle} href="/login">Login</Button>
              <Button style={buttonStyle} href="/register">Register</Button>
              <Button style={buttonStyle}>EN</Button>
            </div>
          </Toolbar>
        
        </AppBar>
        <div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
          {{...this.props.children}}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
