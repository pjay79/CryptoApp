import React, { Component } from 'react';
import CryptoGlobalContainer from '../containers/CryptoGlobalContainer';

export default class GlobalScreen extends Component {
  static navigationOptions = {
    title: 'Global',
    headerStyle: {
      backgroundColor: 'skyblue',
    },
    headerTitleStyle: {
      color: 'black',
    },
    headerLeft: null,
  };

  render() {
    return <CryptoGlobalContainer />;
  }
}
