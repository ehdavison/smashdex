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
      <ScrollView style={styles.scrollContainer}>
        {mappedCharacters.map((character, index) => {
          let path = Images[character.name.toLowerCase()];
          return (
            <View style={styles.characterContainer} key={index}>
              <View style={styles.characterBoxCornerTwo} />
              <View style={styles.characterBoxCorner} />
              <View style={styles.characters}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Detail', {
                      selectedCharacter: character,
                    })
                  }>
                  <View style={styles.charCard}>
                    <Text style={styles.cardName}>{character.name}</Text>
                    <Image style={styles.char} source={path} />
                    <View style={styles.bigAssTriangle} />
                    <Image
                      style={
                        character.name === 'Mario'
                          ? styles.marioCharacterIcon
                          : character.name === 'Luigi'
                          ? styles.luigiCharacterIcon
                          : styles.yoshiCharacterIcon
                      }
                      source={
                        character.name === 'Mario'
                          ? require('../api/images/icons/marioIcon.png')
                          : character.name === 'Luigi'
                          ? require('../api/images/icons/luigiIcon.png')
                          : require('../api/images/icons/yoshiIcon.png')
                      }
                    />
                  </View>
                </TouchableOpacity>
              </View>
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
    backgroundColor: 'white',
  },
  characters: {
    backgroundColor: 'white',
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
    borderColor: 'black',
    borderRadius: 0,
    borderTopWidth: 10,
    borderWidth: 3,
  },
  characterContainer: {
    marginTop: 10,
    padding: 0,
    margin: 0,
  },
  characterBoxCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 90,
    borderTopWidth: 90,
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    zIndex: 5,
    left: 5,
    top: 100,
  },
  characterBoxCornerTwo: {
    marginTop: -180,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    zIndex: 6,
    left: -10,
    top: 190,
  },
  bigAssTriangle: {
    marginTop: -185,
    width: 270,
    height: 180,
    backgroundColor: 'red',
    borderStyle: 'solid',
    borderRightWidth: 200,
    borderTopWidth: 190,
    borderRightColor: 'white',
    borderTopColor: 'blue',
    right: -48,

    top: 0,
    transform: [{rotate: '180deg'}],
    zIndex: -10,
  },
  scrollContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  charCard: {
    display: 'flex',
    alignItems: 'center',
    width: 350,
    backgroundColor: 'transparent',
  },
  cardName: {
    fontSize: 25,
    position: 'absolute',
    right: 30,
    bottom: 40,
    color: 'white',
  },
  char: {
    left: -70,
  },
  marioCharacterIcon: {
    position: 'absolute',
    width: 80,
    height: 90,
    right: 10,
    bottom: 90,
  },
  luigiCharacterIcon: {
    position: 'absolute',
    width: 80,
    height: 90,
    right: 10,
    bottom: 90,
  },
  yoshiCharacterIcon: {
    position: 'absolute',
    width: 65,
    height: 70,
    right: 10,
    bottom: 90,
  },
});

export default Index;
