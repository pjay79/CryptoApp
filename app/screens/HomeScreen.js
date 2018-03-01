import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import Home from '../components/Home';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'skyblue',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
  };

  async componentDidMount() {
    await AsyncStorage.setItem('@SKIP_INTRO', JSON.stringify('true'));
  }

  render() {
    return <Home navigation={this.props.navigation} />;
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
