import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icons from '../../constants/icons';

const CryptoItem = ({ crypto }) => (
  <View style={styles.container}>
    <View style={styles.upperContentStyle}>
      <Image style={styles.icon} source={{ uri: Icons[crypto.symbol] }} />
      <Text style={styles.symbol}>{crypto.symbol}</Text>
      <Text>{crypto.name}</Text>
      <Text style={styles.price}>${crypto.price_usd}</Text>
    </View>
    <View style={styles.lowerContentStyle}>
      <Text style={styles.seven}>
        7d:{' '}
        <Text
          style={
            crypto.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus
          }
        >
          {crypto.percent_change_7d}%
        </Text>
      </Text>
      <Text style={styles.twentyFour}>
        24h:{' '}
        <Text
          style={
            crypto.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus
          }
        >
          {crypto.percent_change_24h}%
        </Text>
      </Text>
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
