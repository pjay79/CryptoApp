import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';

class IntroScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
  };

  componentDidMount = async () => {
    const value = await AsyncStorage.getItem('@SKIP_INTRO');
    if (value !== null) {
      this.props.navigation.navigate('Home');
    }
  };

  onDone = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return <Slider onDone={this.onDone} />;
  }
}

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroScreen;
