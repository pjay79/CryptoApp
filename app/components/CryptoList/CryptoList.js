import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView } from 'react-native';
import styles from './styles';

const CryptoList = ({ data, renderItem, keyExtractor }) => (
  <ScrollView containerContentStyle={styles.containerContentStyle}>
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  </ScrollView>
);

CryptoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default CryptoList;
