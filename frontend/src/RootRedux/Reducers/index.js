/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import * as LandingPageReducer from '../../Components/LandingPage/Redux/reducers';
import * as LoginPageReducer from '../../Components/AuthenticationPage/Redux/reducers';
import * as RegistrationPageReducer from '../../Components/RegistrationPage/Redux/reducers';
import * as RestaurantPageReducer from '../../Components/RestaurantPage/Redux/reducers';
import * as ProfilePageReducer from '../../Components/ProfilePage/Redux/reducers';
import * as ReservationConfirmationReducer from '../../Components/ReservationConfirmationPage/Redux/reducers';
import * as ReservationPostConfirmationReducer from '../../Components/PostConfirmationPage/Redux/reducers';
import * as ReservationReducer from '../../Components/ReservationPage/Redux/reducers';
import * as ReservationInfoReducer from '../../Components/ReservationInfoPage/Redux/reducers';
import * as PaymentReducer from '../../Components/PaymentPage/Redux/reducers';
import * as SplitBillReducer from '../../Components/SplitBillPage/Redux/reducers';
import * as PreOrderReducer from '../../Components/PreOrderPage/Redux/reducers';
import * as ProportionReducer from '../../Components/ProportionViewPage/Redux/reducers';

const reducers = combineReducers({
  ...LandingPageReducer,
  ...LoginPageReducer,
  ...RegistrationPageReducer,
  ...RestaurantPageReducer,
  ...ProfilePageReducer,
  ...ReservationConfirmationReducer,
  ...ReservationPostConfirmationReducer,
  ...ReservationReducer,
  ...ReservationInfoReducer,
  ...PaymentReducer,
  ...SplitBillReducer,
  ...PreOrderReducer,
  ...ProportionReducer,
});

export default reducers;
