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
// import { createStackNavigator } from '@react-navigation/stack'
import Characters from './api/characters.json';
import Images from './api/images/Images';

const App = () => {
  return (
    <View>
      <Index></Index>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characters: {
    margin: 5,
    borderColor: 'black',
    borderRadius: 14,
    borderWidth: 5,
  },
});

export default App;
