import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import styles from './styles';

const Loading = () => (
  <View style={styles.loadingContainer}>
    <BallIndicator style={styles.loadingIndicator} />
  </View>
);

export default Loading;
