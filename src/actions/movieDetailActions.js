import axios from 'axios';
import {
  GET_MOVIE_DETAIL_SUCCESS,
  START_GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_FAILURE,
} from '../constants';

const getMovieDetailSuccess = movieList => ({
  type: GET_MOVIE_DETAIL_SUCCESS,
  payload: movieList,
});

const getMovieDetailFailure = message => ({
  type: GET_MOVIE_DETAIL_FAILURE,
  payload: message,
});

const startGetMovieDetail = () => ({
  type: START_GET_MOVIE_DETAIL,
});

export function getMovieDetail(id) {
  return async dispatch => {
    dispatch(startGetMovieDetail());
    try {
      const res = await axios.get(
        `https://6350faa03e9fa1244e52047d.mockapi.io/movies/${id}`,
      );
      setTimeout(() => {
        console.log(res.data);
        dispatch(getMovieDetailSuccess(res.data));
      }, 0);
    } catch (error) {
      console.error(error);
      dispatch(getMovieDetailFailure(error));
    }
  };
}
