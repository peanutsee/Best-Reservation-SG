/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { lazy } from 'react';

const Login = lazy(() => import('../Components/AuthenticationPage'));

const NAVIGATION_ROUTES = Object.freeze({
  Login: {
    path: '/login',
    element: <Login />,
  },
});

export default NAVIGATION_ROUTES;
