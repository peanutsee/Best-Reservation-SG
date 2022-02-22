/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './RootRedux/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Routes goes here  */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
