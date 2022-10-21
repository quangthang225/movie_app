import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const MovielItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('MovieDetail', {
          id: item.id,
        })
      }>
      <Image
        style={{height: (width / 3) * 1.4}}
        source={{
          uri: item.image,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: (width / 3) * 1.4,
    width: width / 3 - 10,
    margin: 5,
  },
});

export default MovielItem;
