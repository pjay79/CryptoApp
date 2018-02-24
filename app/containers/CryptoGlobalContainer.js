import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchGlobalData } from '../actions/';
import Loading from '../components/Loading';
import CryptoGlobal from '../components/CryptoGlobal';

class CryptoGlobalContainer extends Component {
  componentDidMount() {
    this.props.FetchGlobalData();
  }

  render() {
    if (this.props.global.isFetching) {
      return <Loading />;
    }
    return <CryptoGlobal data={this.props.global.data} />;
  }
}

CryptoGlobalContainer.propTypes = {
  FetchGlobalData: PropTypes.func.isRequired,
  global: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.object,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps, { FetchGlobalData })(CryptoGlobalContainer);
