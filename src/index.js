import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { IntlProvider } from 'react-intl-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import store from './store/createStore';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router history={history}>
        <App />
      </Router>
    </IntlProvider>
  </Provider>,

  document.getElementById('root'),
);
registerServiceWorker();
