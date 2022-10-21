import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MovieInfo = ({movieDetail}) => {
  return (
    <View>
      <Image
        style={{height: 250}}
        source={{
          uri: movieDetail.image,
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.sectionContainer}>
          <Text style={{color: 'darkgray'}}>
            {movieDetail.releaseYear} * {movieDetail.age} *{' '}
            {movieDetail.movieLength} * {movieDetail.type} *{' '}
            {movieDetail.resolution}
          </Text>
        </View>
        <Text style={{color: 'white'}}>{movieDetail.description}</Text>
        <View style={styles.sectionContainer}>
          <Text style={{color: 'darkgray'}}>
            Diễn viên: {movieDetail.actor}
          </Text>
          <Text style={{color: 'darkgray'}}>
            Đạo diễn: {movieDetail.director}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {paddingLeft: 10, paddingRight: 10},
  sectionContainer: {paddingTop: 10, paddingBottom: 10},
});

export default MovieInfo;
