import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MovieItem from '../../../components/MovieItem';

const movieItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_.jpg',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTY2NDY5MTYzOF5BMl5BanBnXkFtZTgwMTcyNTM0NjM@._V1_.jpg',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
    image:
      'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
  },
];

const RelatedMovies = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <Text style={styles.title}>Phim liên quan</Text>
      </View>

      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {movieItems.map(item => {
          return (
            <MovieItem key={item.title} item={item} navigation={navigation} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RelatedMovies;
