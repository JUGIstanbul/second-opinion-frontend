import React from 'react';
import { asyncComponent } from 'react-async-component';

export const Home = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      require.ensure(
        [],
        require => resolve(require('./Home.js')),
        'Home'
      )
    ),
    LoadingComponent: () => <div>Loading...</div>,
    ErrorComponent: () => <div>Loading Error...</div>
});
