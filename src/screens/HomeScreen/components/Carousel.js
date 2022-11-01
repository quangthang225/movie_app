import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';

const {width, height} = Dimensions.get('window');
const CarouselWithPagination = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const CarouselItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.movieImage}
          source={{
            uri: item.image,
          }}
        />
      </View>
    );
  };

  console.log(items);

  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        width={width}
        height={600}
        autoPlay={true}
        data={items}
        scrollAnimationDuration={1000}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
        renderItem={({item, index}) => (
          <CarouselItem item={item} index={index} />
        )}
      />

      <View style={styles.buttonRow}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={require('../../../../assets/icons/plus.png')}
          />
          <Text style={styles.text}>Yêu thích</Text>
        </View>

        <TouchableOpacity
          style={styles.playButton}
          onPress={() =>
            navigation.navigate('MovieDetail', {
              id: activeIndex,
            })
          }>
          <Image
            style={styles.icon}
            source={require('../../../../assets/icons/play.png')}
          />
          <View style={{width: 5}} />
          <Text style={styles.text}>Xem phim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() =>
            navigation.navigate('MovieDetail', {
              id: activeIndex,
            })
          }>
          <Image
            style={styles.icon}
            source={require('../../../../assets/icons/info.png')}
          />
          <Text style={styles.text}>Chi tiết</Text>
        </TouchableOpacity>
      </View>

      <PaginationDot
        activeDotColor={'white'}
        curPage={activeIndex}
        maxPage={items.length}
        sizeRatio={1.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  movieImage: {height: 600},
  itemContainer: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 600,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    width: width,
    height: 100,
  },
  playButton: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    backgroundColor: 'royalblue',
    borderRadius: 20,
    flexDirection: 'row',
  },
  icon: {width: 20, height: 20},
  text: {color: 'white'},
});

export default CarouselWithPagination;
