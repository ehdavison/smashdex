import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const Detail = (props) => {
  return (
    <View>
      <ScrollView>
        <Text>{props.route.params.selectedCharacter.name}</Text>
        {/* <Image source={} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Detail;
