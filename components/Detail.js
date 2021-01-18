import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Images from '../api/images/Images';

const Detail = (props) => {
  let character = props.route.params.selectedCharacter;
  let path = Images[character.name.toLowerCase()];
  let moves = character.moves;
  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Image style={styles.picture} source={path} />
        <Text style={styles.info}>Debut: {character.debut}</Text>
        <Text style={styles.info}>Universe: {character.universe}</Text>
        <Text style={styles.info}>Weight: {character.weight}</Text>
        {/* <Text style={styles.moves}>Moves: {character.moves}</Text> */}
        <View style={styles.tableContainer}>
          {moves.map((move, detail) => {
            return (
              <View style={styles.moveContainer} key={detail}>
                <Text style={styles.moves}>{move}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: '100%',
  },
  info: {
    textAlign: 'center',
  },
  picture: {
    margin: 20,
    alignSelf: 'center',
  },
  name: {
    marginTop: 10,
    fontSize: 35,
    textAlign: 'center',
  },
  tableContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '60%',
    borderRadius: 14,
    borderColor: 'black',
    borderWidth: 5,
  },
  moveContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moves: {
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Detail;
