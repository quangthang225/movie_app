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
        const apiReq = await fetch(
          `https://6350faa03e9fa1244e52047d.mockapi.io/movies/${id}`,
          {
            method: 'GET',
          },
        );
  
        const json = await apiReq.json();
        console.log(json);
        setTimeout(() => {
          dispatch(getMovieDetailSuccess(json));
        }, 2000);
  
        return json || [];
      } catch (error) {
        console.error(error);
        await dispatch(getMovieDetailFailure(error));
      }
    };
  }
  