import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { intlReducer } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import trLocaleData from 'react-intl/locale-data/tr';
import enLocaleData from 'react-intl/locale-data/en';

import * as reducers from './ducks';
import * as translations from './translations';

addLocaleData([...trLocaleData, ...enLocaleData]);

const loggerMiddleware = createLogger();
const rootReducers = combineReducers({
  ...reducers,
  intl: intlReducer,
  form: formReducer
});

function configureStore() {
  let store = createStore(
    rootReducers, {
      intl: {
        defaultLocale: 'tr',
        locale: 'tr',
        messages: translations.tr
      }
    },
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      typeof global.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? global.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  return { store };
}

export default configureStore().store;
