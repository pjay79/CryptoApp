import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    marginTop: -height * 0.25,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: 'white',
  },
  subtitle: {
    marginTop: 25,
    fontSize: 18,
    color: 'white',
  },
});

export default styles;
