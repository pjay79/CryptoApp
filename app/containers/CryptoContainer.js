import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import FetchCoinData from '../actions/';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  render() {
    return (
      <View>
        <Text>This is the CryptoContainer</Text>
      </View>
    );
  }
}

CryptoContainer.propTypes = {
  FetchCoinData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  crypto: state.crypto,
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
