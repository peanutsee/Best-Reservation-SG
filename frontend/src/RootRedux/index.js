/* eslint-disable linebreak-style */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers';

const middleware = [thunk];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLoginReducer: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
