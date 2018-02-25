import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 5,
    paddingTop: 20,
    paddingBottom: 20,
    width: '95%',
    borderRadius: 2,
    shadowOpacity: 0.25, // iOS
    shadowRadius: 1, // iOS
    shadowColor: 'black', // iOS
    shadowOffset: { height: 1, width: 0 }, // iOS
    elevation: 1, // android
  },
  label: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F6C358',
    textAlign: 'center',
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
    color: '#44C4A1',
    textAlign: 'center',
  },
});

export default styles;
