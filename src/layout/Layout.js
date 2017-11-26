import React, { Component } from 'react';
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from 'material-ui';
import Footer from '../components/Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const buttonStyle = {
      color: 'white',
      backgroundColor: 'transparent',
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
      display: 'none',
    };
    return (
      <div>
        <Drawer overlayStyle={{ backgroundColor: 'yellow', opacity: 0.4 }} open={this.state.open}>
          <Sidebar />
        </Drawer>
        <div
          onClick={this.handleToggle}
          style={this.state.open ? { ...drawerOverlay, display: 'block' } : { ...drawerOverlay }}
        />
        <AppBar
          position={'static'}
          title={<span>Title</span>}
          /*iconElementLeft={
            <IconButton aria-label="Menu" onClick={this.handleToggle}>
              <MenuIcon />
            </IconButton>
            }*/
        >
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" />
            <Typography
              type="title"
              color="inherit"
              style={{
                flex: 1,
              }}
            >
              Title
            </Typography>
            <div style={{ padding: '12px 0' }}>
              <Button style={buttonStyle} href="/login">
                Login
              </Button>
              <Button style={buttonStyle} href="/register">
                Register
              </Button>
              <Button style={buttonStyle}>EN</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
          {{ ...this.props.children }}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
