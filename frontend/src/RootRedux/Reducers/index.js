/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import * as LandingPageReducer from '../../Components/LandingPage/Redux/reducers';
import * as LoginPageReducer from '../../Components/AuthenticationPage/Redux/reducers';
import * as RegistrationPageReducer from '../../Components/RegistrationPage/Redux/reducers';

const reducers = combineReducers({
  ...LandingPageReducer,
  ...LoginPageReducer,
  ...RegistrationPageReducer,
});

export default reducers;
