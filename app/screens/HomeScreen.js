import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Crypto Tracker" />
        <Image
          style={{ height: 150, width: 150 }}
          source={require('../assets/images/logo/bitcoin.png')}
        />
        <Button
          title="START"
          onPress={() => this.props.navigation.navigate('Crypto')}
          style={{
            backgroundColor: 'black',
          }}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    paddingBottom: 10,
  },
});
