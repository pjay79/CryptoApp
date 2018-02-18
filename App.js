/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import MainNavigator from './app/routes/routes';

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

export default App;
