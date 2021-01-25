import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Images from '../api/images/Images';
import LinearGradient from 'react-native-linear-gradient';

const Detail = (props) => {
  let character = props.route.params.selectedCharacter;
  let path = Images[character.name.toLowerCase()];
  let moves = character.moves;
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <LinearGradient
          colors={
            character.name === 'Mario'
              ? ['#F70303', '#F77D7D', '#F70303', '#F77D7D', '#F70303']
              : ['#29BF05', '#A6FC9B', '#29BF05', '#A6FC9B', '#29BF05']
          }
          useAngle={true}
          angle={45}
          style={styles.background}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{character.name}</Text>
            <View
              style={
                character.name === 'Mario'
                  ? styles.marioIconContainer
                  : character.name === 'Luigi'
                  ? styles.luigiIconContainer
                  : styles.yoshiIconContainer
              }>
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
        </LinearGradient>
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
    borderColor: '#D7BE69',
    backgroundColor: '#FFD700',
    borderWidth: 3,
    marginTop: 3,
    marginLeft: 25,
    marginRight: 25,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
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
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.8,
    elevation: 5,
  },
  picture: {
    margin: 20,
    alignSelf: 'center',
  },
  nameContainer: {
    marginTop: 0,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 38,
    textAlign: 'left',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  tableContainer: {
    marginBottom: 0,
    marginTop: 20,
    alignItems: 'center',
  },
  moveContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'black',
    width: 300,
    height: 75,
  },
  moves: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    height: '100%',
  },
  marioCharacterIcon: {
    width: 45,
    height: 45,
    marginLeft: 3,
    marginTop: 3,
  },
  marioIconContainer: {
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: '#F77D7D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  luigiCharacterIcon: {
    width: 45,
    height: 45,
    marginLeft: 3,
    marginTop: 3,
  },
  luigiIconContainer: {
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: '#A6FC9B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  yoshiCharacterIcon: {
    width: 35,
    height: 40,
    marginLeft: 2,
  },
  yoshiIconContainer: {
    width: 50,
    height: 50,
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: '#A6FC9B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default Detail;
