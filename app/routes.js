import { Platform, Animated, Easing } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import LoadingScreen from './screens/LoadingScreen';
import IntroScreen from './screens/IntroScreen';
import HomeScreen from './screens/HomeScreen';
import RankingScreen from './screens/RankingScreen';
import GlobalScreen from './screens/GlobalScreen';

const CryptoTabs = TabNavigator(
  {
    Ranking: {
      screen: RankingScreen,
    },
    Global: {
      screen: GlobalScreen,
    },
  },
  {
    tabBarComponent: Platform.OS === 'android' ? NavigationComponent : TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'lightgray',
      style: {
        backgroundColor: 'skyblue',
      },
      bottomNavigationOptions: {
        activeLabelColor: 'black',
        labelColor: 'lightgray',
        rippleColor: 'white',
        backgroundColor: 'skyblue',
      },
    },
  },
);

const MainNavigator = StackNavigator(
  {
    Loading: {
      screen: LoadingScreen,
    },
    Intro: {
      screen: IntroScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Crypto: {
      screen: CryptoTabs,
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  },
);

export default MainNavigator;
