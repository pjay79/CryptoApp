import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CryptoGlobalContainer from '../containers/CryptoGlobalContainer';

export default class GlobalScreen extends Component {
  static navigationOptions = {
    title: 'Global',
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
    tabBarIcon: ({ tintColor }) => <Icon name="earth" size={24} color={tintColor} />,
  };

  render() {
    return <CryptoGlobalContainer />;
  }
}
