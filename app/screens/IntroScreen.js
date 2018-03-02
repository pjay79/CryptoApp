import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';

class IntroScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
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
