import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import createAppContainer from './helpers/createAppContainer';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';

const AppNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
    login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'home',
    // NOTE: The following will fix the layout issue on web
    // cardStyle: { ...StyleSheet.absoluteFillObject },
  },
);

let AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
