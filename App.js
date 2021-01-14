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
  const mappedCharacters = Characters.characters;
  const selectedCharacter = mappedCharacters.map((character) => {
    return character;
  });
  return (
    <View style={styles.container}>
      <Button title="hello" onPress={console} />
      {mappedCharacters.map((character) => {
        let path = Images[character.name.toLowerCase()];
        console.log(character.name.toLowerCase());
        return (
          <View>
            <Text>{character.name}</Text>
            <Image source={path} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
