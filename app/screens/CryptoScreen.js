import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CryptoContainer from '../containers/CryptoContainer';

export default class CryptoScreen extends Component {
  static navigationOptions = {
    title: 'Prices',
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  render() {
    return (
      <ScrollView containerContentStyle={styles.containerContentStyle}>
        <CryptoContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerContentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
