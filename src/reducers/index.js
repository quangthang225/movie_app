import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';

const rootReducer = combineReducers({
  homeReducer,
  movieReducer,
  movieDetailReducer,
});

export default rootReducer;
