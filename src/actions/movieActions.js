import {
    GET_MOVIE_LIST_SUCCESS,
    START_GET_MOVIE_LIST,
    GET_MOVIE_LIST_FAILURE,
  } from '../constants';
  
  const getMoviesSuccess = movieList => ({
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  });
  
  const getMoviesFailure = message => ({
    type: GET_MOVIE_LIST_FAILURE,
    payload: message,
  });
  
  const startGetMovies = () => ({
    type: START_GET_MOVIE_LIST,
  });
  
  export function getMovieList() {
    return async dispatch => {
      dispatch(startGetMovies());
      try {
        const apiReq = await fetch(
          'https://6350faa03e9fa1244e52047d.mockapi.io/movies',
          {
            method: 'GET',
          },
        );
  
        const json = await apiReq.json();
        console.log(json);
        setTimeout(() => {
          dispatch(getMoviesSuccess(json));
        }, 2000);
  
        return json || [];
      } catch (error) {
        console.error(error);
        await dispatch(getMoviesFailure(error));
      }
    };
  }
  