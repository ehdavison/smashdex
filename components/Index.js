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
              <View style={styles.characterBoxCornerTwo}></View>
              <View style={styles.characterBoxCorner}></View>
              <View style={styles.characters}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Detail', {
                      selectedCharacter: character,
                    })
                  }>
                  <View style={styles.bigAssTriangle}></View>
                  <View style={styles.charCard}>
                    <Text style={styles.cardName}>{character.name}</Text>
                    <Image style={styles.char} source={path} />
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
    zIndex: 8,
  },
  characterContainer: {
    borderWidth: 4,
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
    marginTop: -250,
    width: 205,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 70,
    borderTopWidth: 250,
    borderRightColor: 'transparent',
    borderTopColor: 'red',
    right: -155,
    bottom: -220,
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
    marginTop: 3,
  },
  char: {
    left: -70,
  },
});

export default Index;
