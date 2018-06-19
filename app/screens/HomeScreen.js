import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from '../components/Button';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    SplashScreen.hide();
    AsyncStorage.setItem('@SKIP_INTRO', 'true');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>CryptoTracker</Text>
        <Image style={styles.image} source={require('../assets/images/logo/bitcoin.png')} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Pacifico',
    fontSize: 44,
  },
  image: {
    height: 200,
    width: 200,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
