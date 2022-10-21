import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMovieList} from '../../actions/homeActions';
import CarouselWithPagination from './components/Carousel';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Spinner from 'react-native-loading-spinner-overlay';

const movieItems = [
  {
    id: '1',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_.jpg',
  },
  {
    id: '2',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
  },
  {
    id: '3',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  },
  {
    id: '4',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTY2NDY5MTYzOF5BMl5BanBnXkFtZTgwMTcyNTM0NjM@._V1_.jpg',
  },
  {
    id: '5',
    image:
      'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
  },
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
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
      ],
      bannerItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          image:
            'https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          image:
            'https://www.heyuguys.com/images/2012/11/Gangster-Squad-Banner.jpg',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
          image:
            'https://sevensentencereviews.com/wp-content/uploads/2012/11/cloud-atlas.jpg',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
          image:
            'https://salondelmal.files.wordpress.com/2012/05/tdkr-nuevo-banner-2.jpeg?w=594&h=271',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
          image:
            'http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.getMovieList();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Spinner
            visible={this.props.isLoading}
            textContent={'Đang tải...'}
            textStyle={styles.spinnerTextStyle}
          />
          <View>
            <CarouselWithPagination items={this.state.carouselItems} />
            <MovieList
              items={this.props.movieList}
              title={'Phim mới cập nhật'}
            />
            <MovieList items={movieItems} title={'Phim nổi bật'} />
            <Banner items={this.state.bannerItems} />
            <MovieList items={movieItems} title={'Phim được ưa thích'} />
            <MovieList items={movieItems} title={'Phim hành động'} />
            <MovieList items={movieItems} title={'Phim bộ đặc sắc'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovieList,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  movieList: state.homeReducer.movieList,
  isLoading: state.homeReducer.isLoading
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  spinnerTextStyle: {
    color: "white"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
