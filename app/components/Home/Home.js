import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Header from '../Header';
import Button from '../Button';
import styles from './styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="Crypto Tracker" />
    <Image style={styles.image} source={require('../../assets/images/logo/bitcoin.png')} />
    <Button
      title="START"
      onPress={() => navigation.navigate('Crypto')}
      style={{
        backgroundColor: 'black',
      }}
    />
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
