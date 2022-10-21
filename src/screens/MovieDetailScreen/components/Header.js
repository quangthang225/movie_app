import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Header = ({onBackPress}) => {
  return (
    <View style={{paddingLeft: 10}}>
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
  container: {paddingLeft: 10},
  backContainer: {
    width: 30,
    height: 30,
  },
  icon: {width: 20, height: 20},
});

export default Header;
