import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonRow = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.functionButton}>
        <Image
          style={styles.icon}
          source={require('../../../../assets/icons/plus.png')}
        />
        <Text style={styles.text}>Yêu thích</Text>
      </View>

      <TouchableOpacity style={styles.functionButton} onPress={() => {}}>
        <Image
          style={styles.icon}
          source={require('../../../../assets/icons/share.png')}
        />
        <Text style={styles.text}>Chia sẻ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.functionButton} onPress={() => {}}>
        <Image
          style={styles.icon}
          source={require('../../../../assets/icons/download.png')}
        />
        <Text style={styles.text}>Tải về</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    height: 100,
  },
  functionButton: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  text: {color: 'white'},
  icon: {width: 20, height: 20},
});

export default ButtonRow;
