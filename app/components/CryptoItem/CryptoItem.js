import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icons from '../../constants/icons';

const CryptoItem = ({ crypto }) => (
  <View style={styles.container}>
    <View style={styles.containerContentStyle}>
      <Image style={styles.icon} source={{ uri: Icons[crypto.symbol] }} />
      <Text>{crypto.name}</Text>
      <Text>${crypto.price_usd}</Text>
      <Text>{crypto.percent_change_24h}%</Text>
    </View>
  </View>
);

CryptoItem.propTypes = {
  crypto: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.array,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
};

export default CryptoItem;
