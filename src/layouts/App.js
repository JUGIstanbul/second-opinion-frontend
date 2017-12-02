import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages';

class App extends Component {
  render() {
    return (
      <Main>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/404" render={() => <div>404 Not Found!</div>} />
        </Switch>
      </Main>
    );
  }
}

export const Main = styled.div`
  position: relative;
  width: 100%;
  max-width: 920px;
`;

export default App;
