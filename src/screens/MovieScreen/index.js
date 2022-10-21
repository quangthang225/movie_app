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
import {getMovieList} from '../../actions/movieActions';
import MovieItem from '../../components/MovieItem';
import Header from './components/Header';
import Spinner from 'react-native-loading-spinner-overlay';

class MovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieItems: [
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
    };
  }

  componentDidMount() {
    this.props.getMovieList();
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.props.isLoading}
          textContent={'Đang tải...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Header
          title={this.props.route.params.title}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <FlatList
          data={this.props.movieList}
          numColumns={3}
          renderItem={MovieItem}
          renderItem={({item}) => (
            <MovieItem item={item} navigation={this.props.navigation} />
          )}
          keyExtractor={item => item.title}
        />
      </View>
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
  movieList: state.movieReducer.movieList,
  isLoading: state.movieReducer.isLoading,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  spinnerTextStyle: {
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
