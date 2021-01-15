import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Characters from '../api/characters.json';
import Images from '../api/images/Images';

const Index = (props) => {
  const mappedCharacters = Characters.characters;
  return (
    <View style={styles.container}>
      <Text>SmashDex</Text>
      {mappedCharacters.map((character, index) => {
        let path = Images[character.name.toLowerCase()];
        return (
          <View style={styles.characters} key={index}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Detail', {
                  selectedCharacter: character,
                })
              }>
              <Text>{character.name}</Text>
              <Image source={path} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characters: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
    margin: 5,
    borderColor: 'black',
    borderRadius: 14,
    borderWidth: 5,
  },
});

export default Index;
