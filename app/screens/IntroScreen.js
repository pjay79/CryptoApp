import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Slider from '../components/Slider';

class IntroScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  onDone = () => {
    this.props.navigation.navigate('Home');
  };

  onSkip = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return <Slider onDone={this.onDone} onSkip={this.onSkip} />;
  }
}

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroScreen;
