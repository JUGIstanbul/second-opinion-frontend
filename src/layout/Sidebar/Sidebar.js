import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { CardMedia } from 'material-ui/Card/index';

export default class Sidebar extends Component {
  render() {
    const logoStyle = {
      padding: '24px',
    };
    return (
      <div>
        <CardMedia style={logoStyle}>
          <img src="/images/logo.jpg" alt="" />
        </CardMedia>
        <MenuItem>Submit a Case</MenuItem>
        <MenuItem>Solve Medical Cases</MenuItem>
        <MenuItem>How it Works</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact Us</MenuItem>
      </div>
    );
  }
}
