import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {fetchImages} from '../redux/unsplash/unsplash-operatios';
import {getAllImages} from '../redux/unsplash/unsplash-selectors';

export default function HerosList({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const images = useSelector(getAllImages);

  const elements = images?.map(({urls, user, id, description}) => {
    const imageWithDescription = (
      <>
        <Text style={styles.descriptionItem}>Author: {user.name}</Text>
        <Text style={styles.descriptionItem}>{description}</Text>
      </>
    );

    const fullImage = urls.full;

    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('DetailImage', {fullImage})}
        key={id}>
        <View style={styles.container}>
          <Image source={{uri: urls.regular}} style={styles.img} />
          <View style={styles.descriptionContainer}>
            {description ? (
              imageWithDescription
            ) : (
              <Text style={styles.descriptionItem}>Author: {user.name}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  return <ScrollView style={styles.container}>{elements}</ScrollView>;
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'cadetblue',
    marginBottom: 5,
  },
  img: {
    width: '100%',
    height: 200,
  },

  descriptionContainer: {
    padding: 5,
  },
  descriptionItem: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
