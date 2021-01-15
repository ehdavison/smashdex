/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Detail from './components/Detail';
import Index from './components/Index';
import {NavigationContainer} from '@react-navigation/native';
import Characters from './api/characters.json';
import Images from './api/images/Images';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Index"
          component={Index}
          options={({navigation}) => ({})}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({navigation}) => ({})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
