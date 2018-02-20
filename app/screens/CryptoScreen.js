import React, { Component } from 'react';
import CryptoContainer from '../containers/CryptoContainer';

export default class CryptoScreen extends Component {
  static navigationOptions = {
    title: 'Top 10 Market Cap',
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  render() {
    return <CryptoContainer />;
  }
}
