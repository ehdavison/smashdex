import React from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Image} from 'react-native';
import Characters from '../api/characters.json';
import Images from '../api/images/Images';

const Index = () => {
  const mappedCharacters = Characters.characters;
  return (
    <View style={styles.container}>
      <Button title="hello" onPress={console} />
      {mappedCharacters.map((character, index) => {
        let path = Images[character.name.toLowerCase()];
        console.log(character.name.toLowerCase());
        return (
          <View style={styles.characters} key={index}>
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

export default Index;
