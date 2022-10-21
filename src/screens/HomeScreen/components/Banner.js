import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';

const Banner = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {width, height} = Dimensions.get('window');

  const BannerItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.bannerImage}
          source={{
            uri: item.image,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        width={width}
        height={200}
        autoPlay={true}
        data={items}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({item, index}) => <BannerItem item={item} index={index} />}
      />
      <View style={styles.paginationDotContainer}>
        <PaginationDot
          activeDotColor={'white'}
          curPage={activeIndex}
          maxPage={items.length}
          sizeRatio={1.5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bannerImage: {height: 200},
  itemContainer: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    // height: 400,
  },
  paginationDotContainer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Banner;
