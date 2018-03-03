import React from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const Slider = ({ onDone, onSkip }) => (
  <Onboarding
    pages={[
      {
        backgroundColor: 'skyblue',
        image: (
          <Image source={require('../../assets/images/intro/bar-chart.png')} style={styles.image} />
        ),
        title: <Text style={styles.title}>Top 10</Text>,
        subtitle: <Text style={styles.subtitle}>Ranking by market cap</Text>,
      },
      {
        backgroundColor: 'skyblue',
        image: (
          <Image source={require('../../assets/images/intro/network.png')} style={styles.image} />
        ),
        title: <Text style={styles.title}>Global</Text>,
        subtitle: <Text style={styles.subtitle}>Cryptocurrency data</Text>,
      },
    ]}
    onDone={onDone}
    onSkip={onSkip}
  />
);

Slider.propTypes = {
  onDone: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default Slider;
