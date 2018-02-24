import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const CryptoGlobal = ({ data }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.label}>Total market cap:</Text>
      <Text style={styles.value}>$US{data.total_market_cap_usd}</Text>
    </View>
    <View>
      <Text style={styles.label}>Total 24h volume:</Text>
      <Text style={styles.value}>$US{data.total_24h_volume_usd}</Text>
    </View>
    <View>
      <Text style={styles.label}>Bitcoin % of market cap:</Text>
      <Text style={styles.value}>{data.bitcoin_percentage_of_market_cap}%</Text>
    </View>
    <View>
      <Text style={styles.label}>Active currencies:</Text>
      <Text style={styles.value}>{data.active_currencies}</Text>
    </View>
    <View>
      <Text style={styles.label}>Active assets:</Text>
      <Text style={styles.value}>{data.active_assets}</Text>
    </View>
    <View>
      <Text style={styles.label}>Active markets: </Text>
      <Text style={styles.value}>{data.active_markets}</Text>
    </View>
  </View>
);

CryptoGlobal.propTypes = {
  data: PropTypes.shape({
    total_market_cap_usd: PropTypes.number,
    total_24h_volume_usd: PropTypes.number,
    bitcoin_percentage_of_market_cap: PropTypes.number,
    active_currencies: PropTypes.number,
    active_assets: PropTypes.number,
    active_markets: PropTypes.number,
  }).isRequired,
};

export default CryptoGlobal;
