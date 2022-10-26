import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Header = ({onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backContainer}>
        <Image
          style={styles.icon}
          source={require('../../../../assets/icons/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft: 10,
    position:  "absolute",
    top: 0,
    zIndex: 1,
  },
  backContainer: {
    width: 30,
    height: 30,
  },
  icon: {width: 20, height: 20},
});

export default Header;
