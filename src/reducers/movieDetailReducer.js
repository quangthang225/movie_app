import {
    GET_MOVIE_DETAIL_SUCCESS,
    START_GET_MOVIE_DETAIL,
    GET_MOVIE_DETAIL_FAILURE,
  } from '../constants';

  const initialState = {
    movieDetail: {},
    isLoading: false,
  };

  const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIE_DETAIL_SUCCESS:
        return {
          ...state,
          movieDetail: action.payload,
          isLoading: false,
        };
      case START_GET_MOVIE_DETAIL:
        return {
          isLoading: true,
          errorMessage: '',
          movieDetail: {},
        };
      case GET_MOVIE_DETAIL_FAILURE:
        return {
          ...state,
          isLoading: false,
          errorMessage: action.message,
        };
      default:
        return state;
    }
  };
  export default movieDetailReducer;
  