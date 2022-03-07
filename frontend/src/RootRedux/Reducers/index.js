/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import * as LandingPageReducer from '../../Components/LandingPage/Redux/reducers';

const reducers = combineReducers({
  // Add All Reducers Here
  ...LandingPageReducer,
});

export default reducers;
