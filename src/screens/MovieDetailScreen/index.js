import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMovieDetail} from '../../actions/movieDetailActions';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './components/Header';
import MovieInfo from './components/MovieInfo';
import ButtonRow from './components/ButtonRow';
import RelatedMovies from './components/RelatedMovies';

class MovieDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovieDetail(this.props.route.params.id);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Spinner
          visible={this.props.isLoading}
          textContent={'Đang tải...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Header onBackPress={() => this.props.navigation.goBack()} />
        <MovieInfo movieDetail={this.props.movieDetail} />
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => console.log('pressed')}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/play.png')}
          />
          <View style={{width: 5}} />
          <Text style={styles.text}>Xem phim</Text>
        </TouchableOpacity>
        <ButtonRow />
        <RelatedMovies />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovieDetail,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  movieDetail: state.movieDetailReducer.movieDetail,
  isLoading: state.movieDetailReducer.isLoading,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  spinnerTextStyle: {
    color: 'white',
  },
  playButton: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    backgroundColor: 'royalblue',
    borderRadius: 20,
    flexDirection: 'row',
  },
  icon: {width: 20, height: 20},
  text: {color: 'white'},
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
