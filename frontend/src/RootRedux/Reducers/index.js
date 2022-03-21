/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import * as LandingPageReducer from '../../Components/LandingPage/Redux/reducers';
import * as LoginPageReducer from '../../Components/AuthenticationPage/Redux/reducers';
import * as RegistrationPageReducer from '../../Components/RegistrationPage/Redux/reducers';
import * as ProfilePageReducer from '../../Components/ProfilePage/Redux/reducers';
import * as ReservationConfirmationReducer from '../../Components/ReservationConfirmationPage/Redux/reducers';
import * as ReservationReducer from '../../Components/ReservationPage/Redux/reducers';
import * as PaymentReducer from '../../Components/PaymentPage/Redux/reducers';

const reducers = combineReducers({
  ...LandingPageReducer,
  ...LoginPageReducer,
  ...RegistrationPageReducer,
  ...ProfilePageReducer,
  ...ReservationConfirmationReducer,
  ...ReservationReducer,
  ...PaymentReducer,
});

export default reducers;
