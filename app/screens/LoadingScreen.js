import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';

export default class LoadingScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'skyblue',
    },
  };

  componentDidMount() {
    this.checkIntro();
  }

  checkIntro = async () => {
    const value = await AsyncStorage.getItem('@SKIP_INTRO');
    if (value === 'true') {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Intro');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
