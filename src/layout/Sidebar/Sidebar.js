import React , {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';

export default class Sidebar extends Component {

  render() {
    return (
      <div>
          <MenuItem>Submit a Case</MenuItem>
          <MenuItem>Solve Medical Cases</MenuItem>
          <MenuItem>How it Works</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Contact Us</MenuItem>
      </div>
    );
  }
}