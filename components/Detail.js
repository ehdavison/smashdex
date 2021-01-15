import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Images from '../api/images/Images';

const Detail = (props) => {
  let character = props.route.params.selectedCharacter;
  let path = Images[character.name.toLowerCase()];
  return (
    <View>
      <ScrollView>
        <Text>{character.name}</Text>
        <Image source={path} />
        <Text style={styles.info}>Debut: {character.debut}</Text>
        <Text style={styles.info}>Moves: {character.moves}</Text>
        <Text style={styles.info}>Universe: {character.universe}</Text>
        <Text style={styles.info}>Weight: {character.weight}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    textAlign: 'center',
  },
});

export default Detail;
