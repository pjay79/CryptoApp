import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContentStyle: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  lowerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 20,
  },
  symbol: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 10,
  },
  price: {
    marginRight: 20,
    marginLeft: 'auto',
  },
  seven: {
    fontWeight: 'bold',
    marginRight: 20,
  },
  twentyFour: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;
