import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings([
  'Class RCTCxxModule',
  'Warning: isMounted(...)',
  'Module RCTImageLoader',
]);

AppRegistry.registerComponent('CryptoApp', () => App);
