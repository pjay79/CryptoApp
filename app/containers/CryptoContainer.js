import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchCoinData } from '../actions/';
import CryptoList from '../components/CryptoList';
import CryptoItem from '../components/CryptoItem';
import Loading from '../components/Loading';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => <CryptoItem crypto={item} />;

  render() {
    if (this.props.crypto.isFetching) {
      return <Loading />;
    }
    return (
      <CryptoList
        data={this.props.crypto.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

CryptoContainer.propTypes = {
  FetchCoinData: PropTypes.func.isRequired,
  crypto: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.array,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  crypto: state.crypto,
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
