/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (process.env.NODE_ENV === 'production') {
    const sw = require('./serviceWorker.js');
    sw.register();
}