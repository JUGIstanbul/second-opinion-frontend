import React, {Component} from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';
import {AppBar,IconButton,FontIcon,Drawer} from 'material-ui';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
 handleToggle = () => this.setState({open: !this.state.open});
 

 
  render() {
    return (
      <div>
        <Drawer  open={this.state.open}>
          <Sidebar>
         
          </Sidebar>
        </Drawer>
          <AppBar
              title={<span>Title</span>}
              onTitleTouchTap={this.handleToggle}
              iconElementRight={<IconButton onClick={this.handleToggle} />}
              iconElementLeft={
              <IconButton onClick={this.handleToggle}>
                <FontIcon className="material-icons">menu</FontIcon>
              </IconButton>}
            />
          <p>Content</p>
          <p>Footer</p>
      </div>
    );
  }
}



export default LandingPage;
