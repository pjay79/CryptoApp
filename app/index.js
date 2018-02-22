import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainNavigator from './routes';

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

export default App;
