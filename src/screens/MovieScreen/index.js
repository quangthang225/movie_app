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
