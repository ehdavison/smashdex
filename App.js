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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Detail from "./components/Detail"
import Index from "./components/Index"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const App = () => {
  return (
      <View style={styles.container}>
        {/* <Detail />
        <Index /> */}
        <Text>HELLO</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
