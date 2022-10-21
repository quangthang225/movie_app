import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MovieList = ({title, items}) => {
  const navigation = useNavigation();
  const MovielItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.movieContainer}
        onPress={() =>
          navigation.navigate('MovieDetail', {
            id: item.id,
          })
        }>
        <Image
          style={{height: 200}}
          source={{
            uri: item.image,
          }}
        />
      </TouchableOpacity>
    );
  };

  const Separator = () => {
    return (
      <View
        style={{
          width: 10,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() =>
          navigation.navigate('Movie', {
            title: title,
          })
        }>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.icon}
          source={require('../../../../assets/icons/arrow_right.png')}
        />
      </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={({item, index}) => <MovielItem item={item} index={index} />}
        keyExtractor={item => item.id}
        horizontal={true}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 30,
  },
  titleContainer: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  movieContainer: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 200,
    width: 160,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {width: 20, height: 20},
});

export default MovieList;
