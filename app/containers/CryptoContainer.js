import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchCoinData from '../actions/';
import CryptoList from '../components/CryptoList';
import Loading from '../components/Loading';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  render() {
    if (this.props.crypto.isFetching) {
      return <Loading />;
    }
    return <CryptoList cryptos={this.props.crypto.data} />;
  }
}

CryptoContainer.propTypes = {
  FetchCoinData: PropTypes.func.isRequired,
  crypto: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.array,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  crypto: state.crypto,
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
