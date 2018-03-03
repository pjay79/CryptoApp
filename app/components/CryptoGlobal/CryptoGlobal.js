import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './styles';

const CryptoGlobal = ({ data }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../../assets/images/global/total_market_cap.png')}
        />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Total market cap:</Text>
        </View>
        <Text style={styles.value}>$US{data.total_market_cap_usd}</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../assets/images/global/24h_volume.png')} />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Total 24h volume:</Text>
        </View>
        <Text style={styles.value}>$US{data.total_24h_volume_usd}</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../../assets/images/global/bitcoin_market_cap.png')}
        />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Bitcoin % of market cap:</Text>
        </View>
        <Text style={styles.value}>{data.bitcoin_percentage_of_market_cap}%</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../../assets/images/global/active_currencies.png')}
        />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Active currencies:</Text>
        </View>
        <Text style={styles.value}>{data.active_currencies}</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../../assets/images/global/active_assets.png')}
        />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Active assets:</Text>
        </View>
        <Text style={styles.value}>{data.active_assets}</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../../assets/images/global/active_markets.png')}
        />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Active markets: </Text>
        </View>
        <Text style={styles.value}>{data.active_markets}</Text>
      </View>
    </ScrollView>
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
