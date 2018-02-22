import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CryptoContainer from '../containers/CryptoContainer';

export default class RankingScreen extends Component {
  static navigationOptions = {
    title: 'Top 10',
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
    tabBarIcon: ({ tintColor }) => <Icon name="list-ol" size={24} color={tintColor} />,
  };

  render() {
    return <CryptoContainer />;
  }
}
