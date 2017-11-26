import React, {Component} from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';
import {AppBar, Drawer, FlatButton, FontIcon, IconButton} from 'material-ui';
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation/index";
import {CardMedia} from "material-ui/Card/index";
import Footer from "../../components/Footer/Footer";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleToggle = () => this.setState({open: !this.state.open});
  handleClick = () => {
    this.setState({open: !this.state.open});
  }
  
  
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
        <AppBar
          title={<span>Title</span>}
          iconElementLeft={
            <IconButton onClick={this.handleToggle}>
              <FontIcon className="material-icons">menu</FontIcon>
            </IconButton>}>
          <div style={{padding: '12px 0'}}>
            <FlatButton style={buttonStyle} label="Login"/>
            <FlatButton
              style={buttonStyle}
              label="Register"
              onClick={() => this.handleClick("register")}
            />
            <FlatButton style={buttonStyle} label="EN"/>
          </div>
        </AppBar>
        <CardMedia>
          <img src="/images/landing-page.jpg" alt=""/>
        </CardMedia>
        <Footer/>
      </div>
    );
  }
}


export default LandingPage;
