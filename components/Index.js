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
    <View contentContainerStyle={styles.container}>
      <ScrollView style={styles.scrollContainer}>
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
                <View style={styles.charCard}>
                  <Text style={styles.cardName}>{character.name}</Text>
                  <Image source={path} />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 20,
    borderColor: '#450045',
    borderRadius: 14,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: '100%',
  },
  charCard: {
    display: 'flex',
    alignItems: 'center',
    width: 350,
    backgroundColor: 'transparent',
  },
  cardName: {
    fontSize: 25,
    marginTop: 3,
  },
});

export default Index;
