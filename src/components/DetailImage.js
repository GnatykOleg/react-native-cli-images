import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

export default function DetailImage({route}) {
  const {fullImage} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: fullImage}} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
