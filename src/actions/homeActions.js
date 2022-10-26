import axios from 'axios';
import {
  GET_HOME_MOVIE_LIST_SUCCESS,
  START_GET_HOME_MOVIE_LIST,
  GET_HOME_MOVIE_LIST_FAILURE,
} from '../constants';

const getMoviesSuccess = movieList => ({
  type: GET_HOME_MOVIE_LIST_SUCCESS,
  payload: movieList,
});

const getMoviesFailure = message => ({
  type: GET_HOME_MOVIE_LIST_FAILURE,
  payload: message,
});

const startGetMovies = () => ({
  type: START_GET_HOME_MOVIE_LIST,
});

export function getMovieList() {
  return async dispatch => {
    dispatch(startGetMovies());
    try {
      const res = await axios.get(
        'https://6350faa03e9fa1244e52047d.mockapi.io/movies',
      );
      setTimeout(() => {
        console.log(res.data);
        dispatch(getMoviesSuccess(res.data));
      }, 0);
    } catch (error) {
      console.error(error);
      dispatch(getMoviesFailure(error));
    }
  };
}
