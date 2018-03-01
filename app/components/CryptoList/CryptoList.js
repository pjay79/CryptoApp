import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView, View } from 'react-native';
import styles from './styles';

const ItemSeparatorComponent = () => <View style={styles.itemSeparatorComponent} />;

const CryptoList = ({ data, renderItem, keyExtractor }) => (
  <View style={styles.container}>
    <ScrollView containerContentStyle={styles.containerContentStyle}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </ScrollView>
  </View>
);

CryptoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default CryptoList;
