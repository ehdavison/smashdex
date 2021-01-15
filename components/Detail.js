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
        <Text>Debut: {character.debut}</Text>
        <Text>Moves: {character.moves}</Text>
        <Text>Universe: {character.universe}</Text>
        <Text>Weight: {character.weight}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Detail;
