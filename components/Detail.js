import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Images from '../api/images/Images';

const Detail = (props) => {
  let character = props.route.params.selectedCharacter;
  let path = Images[character.name.toLowerCase()];
  let moves = character.moves;
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <View
          style={
            character.name === 'Mario'
              ? styles.marioBackground
              : styles.background
          }>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{character.name}</Text>
          </View>
          <View style={styles.pictureContainer}>
            <Image style={styles.picture} source={path} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Debut: {character.debut}, </Text>
            <Text style={styles.info}>Universe: {character.universe}, </Text>
            <Text style={styles.info}>Weight: {character.weight}</Text>
          </View>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  scrollContainer: {
    borderWidth: 12,
    borderColor: '#FFD700',
    borderRadius: 20,

    marginLeft: 0,
    marginRight: 0,
    height: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#FFD700',
    backgroundColor: '#FFD700',
    borderWidth: 3,
    marginTop: 3,
    marginLeft: 25,
    marginRight: 25,
  },
  info: {
    textAlign: 'center',
  },
  pictureContainer: {
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 6,
    borderTopRightRadius: 15,
    borderColor: 'grey',
  },
  picture: {
    margin: 20,
    alignSelf: 'center',
  },
  nameContainer: {
    marginTop: 0,
    marginLeft: 20,
  },
  name: {
    fontSize: 28,
    textAlign: 'left',
  },
  tableContainer: {
    marginBottom: 0,
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
  },
  moves: {
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  marioBackground: {
    height: '100%',
    backgroundColor: '#EA2424',
  },
});

export default Detail;
