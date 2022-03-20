/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './Commons/Nav/AppHeader';
import AppFooter from './Commons/Nav/AppFooter';
// import 'antd/dist/antd.css';
import store from './RootRedux/index';
import './bootstrap.min.css';
import ScrollToTop from './Commons/ScrollToTop';
import NAVIGATION_ROUTES from './Navigation/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <AppHeader />
        <Suspense fallback={<div />}>
          <Routes>
            {Object.values(NAVIGATION_ROUTES).map((route, key) => (
              <Route key={key} {...route} />
            ))}
          </Routes>
        </Suspense>
        <AppFooter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
