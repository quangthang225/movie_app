import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Header = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backContainer}>
        <Image
          style={styles.icon}
          source={require('../../../../assets/icons/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  backContainer: {
    width: 30,
    height:  30,
  },
  titleContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {width: 20, height: 20},
});

export default Header;
