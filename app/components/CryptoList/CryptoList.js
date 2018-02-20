import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import CryptoItem from '../CryptoItem';

const CryptoList = ({ cryptos }) => (
  <FlatList
    data={cryptos}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <CryptoItem crypto={item} />}
  />
);

CryptoList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CryptoList;
