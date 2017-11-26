import React , {Component} from 'react';
import {CardMedia} from "material-ui/Card/index";
import {MenuItem, MenuList} from "material-ui";

export default class Sidebar extends Component {

  render() {
    const logoStyle = {
      padding: '24px',
      
    };
    return (
      <div>
        <CardMedia style={logoStyle}>
          <img style={{maxWidth: '200px'}} src="/images/logo.jpg" alt="" />
        </CardMedia>
        <MenuList>
          <MenuItem>Submit a Case</MenuItem>
          <MenuItem>Solve Medical Cases</MenuItem>
          <MenuItem>How it Works</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Contact Us</MenuItem>
        </MenuList>
        
      </div>
    );
  }
}