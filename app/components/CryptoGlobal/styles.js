import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'darkgrey',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  labelWrapper: {
    width: '50%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'darkgrey',
    marginBottom: 20,
  },
  value: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;
