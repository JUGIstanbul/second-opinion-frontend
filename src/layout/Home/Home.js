import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './Home.css';
import LandingPage from "../../pages/landing/LandingPage";
import Layout from "../Layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
          <Switch>
            <Route path={`${this.props.match.url}/`} component={LandingPage}/>
          </Switch>
        </div>
      </Layout>
    );
  }
}


export default Home;
