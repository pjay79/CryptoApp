import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CryptoScreen from '../screens/CryptoScreen';

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Crypto: {
    screen: CryptoScreen,
  },
});

export default MainNavigator;
