import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {AppBar, Button, CardMedia, Drawer, Grid, IconButton, Toolbar, Typography} from 'material-ui';
import './Authentication.css';
import Login from '../../pages/Authentication/Login';
import Register from '../../pages/Authentication/Register';
import ResetPassword from '../../pages/Authentication/ResetPassword';
import SetPassword from '../../pages/Authentication/SetPassword';
import Layout from "../Layout";

class Authentication extends Component {
  render() {
    return (
      <Layout>
        <div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
          <Grid container>
            <Grid item xs={12} sm={6} md={8} style={{ maxHeight: '88vh' }}>
              <CardMedia>
                <img src="/images/landing-page.jpg" alt=""/>
              </CardMedia>
            </Grid>
            <Grid item xs={12} sm={6} md={4}
                  style={{backgroundColor: 'white', justify: 'center',
                    display: '-webkit-box',
                    display: '-webkit-flex',
                    display: '-ms-flexbox',
                    display: 'flex',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-box-direction': 'normal',
                    '-webkit-flex-direction': 'column',
                    '-ms-flex-direction': 'column',
                    'flex-direction': 'column',
                    '-webkit-box-pack': 'center',
                    '-webkit-justify-content': 'center',
                    '-ms-flex-pack': 'center',
                    'justify-content': 'center',
                    '-webkit-box-align': 'center',
                    '-webkit-align-items': 'center',
                    '-ms-flex-align': 'center',
                    'align-items': 'center',
                    '-webkit-box-flex': '1',
                    '-webkit-flex': '1',
                    '-ms-flex': '1',
                    'flex': '1'
                  }}>
              <Switch>
                <Route path={`${this.props.match.url}/login`} component={Login}/>
                <Route path={`${this.props.match.url}/register`} component={Register}/>
                <Route path={`${this.props.match.url}/reset`} component={ResetPassword}/>
                <Route path={`${this.props.match.url}/set-password`} component={SetPassword}/>
                <Route path={this.props.match.url} render={() => <Redirect to="/auth/login"/>}/>
              </Switch>
            </Grid>
          </Grid>
          
         
        </div>
      </Layout>
    );
  }
}


export default Authentication;
