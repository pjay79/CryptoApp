import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import PropTypes from 'prop-types';

class SplashScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
  };

  async componentWillMount() {
    // AsyncStorage.clear();
    const value = await AsyncStorage.getItem('@SKIP_INTRO');
    if (value !== null || value === 'true') {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Intro');
    }
  }

  render() {
    return <View style={{ flex: 1, backgroundColor: 'skyblue' }} />;
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SplashScreen;
