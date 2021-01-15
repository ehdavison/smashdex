/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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

const App = ({navigation}) => {
  const Stack = createStackNavigator();
  const [character, setCharacter] = useState();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Index"
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 60,
                  height: 50,
                }}
                source={require('./api/images/icon.png')}></Image>
            ),
          }}>
          {(props) => <Index {...props} setCharacter={setCharacter} />}
        </Stack.Screen>
        <Stack.Screen
          name="Detail"
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 60,
                  height: 50,
                }}
                source={require('./api/images/icon.png')}></Image>
            ),
          }}>
          {(props) => <Detail {...props} character={character} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
