import PropTypes from 'prop-types';
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadingScreen from '../screens/LoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import RankingScreen from '../screens/RankingScreen';
import GlobalScreen from '../screens/GlobalScreen';

const RankingIcon = ({ tintColor }) => <FontAwesome name="list-ol" size={20} color={tintColor} />;

const GlobalIcon = ({ tintColor }) => (
  <MaterialCommunityIcons name="earth" size={20} color={tintColor} />
);

const RankingStack = createStackNavigator({
  RankingStack: {
    screen: RankingScreen,
  },
});

const GlobalStack = createStackNavigator({
  GlobalStack: {
    screen: GlobalScreen,
  },
});

const CryptoTabs = createBottomTabNavigator(
  {
    Ranking: {
      screen: RankingStack,
      navigationOptions: {
        tabBarLabel: 'Top 10',
        tabBarIcon: RankingIcon,
      },
    },
    Global: {
      screen: GlobalStack,
      navigationOptions: {
        tabBarLabel: 'Global',
        tabBarIcon: GlobalIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      showIcon: true,
      style: {
        backgroundColor: 'skyblue',
      },
    },
  },
);

export default createSwitchNavigator(
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
    initialRouteName: 'Loading',
    headerMode: 'none',
  },
);

RankingIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

GlobalIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
