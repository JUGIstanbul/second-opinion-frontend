import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages';
import Header from '../components/Header';

class App extends Component {
  render() {
    return [
      <Header key="h-1" />,
      <Main key="m-1">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/404" render={() => <div>404 Not Found!</div>} />
        </Switch>
      </Main>
    ];
  }
}

export const Main = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
`;

export default App;
