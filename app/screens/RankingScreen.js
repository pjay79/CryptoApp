import React, { Component } from 'react';
import CryptoContainer from '../containers/CryptoContainer';

export default class RankingScreen extends Component {
  static navigationOptions = {
    title: 'Top 10',
    headerStyle: {
      backgroundColor: 'skyblue',
    },
    headerTitleStyle: {
      color: 'black',
    },
    headerLeft: null,
  };

  render() {
    return <CryptoContainer />;
  }
}
