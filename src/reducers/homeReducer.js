import {
  GET_HOME_MOVIE_LIST_SUCCESS,
  START_GET_HOME_MOVIE_LIST,
  GET_HOME_MOVIE_LIST_FAILURE,
} from '../constants';
const initialState = {
  movieList: [],
  isLoading: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
        isLoading: false,
      };
    case START_GET_HOME_MOVIE_LIST:
      return {
        isLoading: true,
        errorMessage: '',
        movieList: [],
      };
    case GET_HOME_MOVIE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};
export default homeReducer;
