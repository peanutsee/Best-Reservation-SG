/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { lazy } from 'react';

const LandingPage = lazy(() => import('../Components/LandingPage'));
const ReservationPage = lazy(() => import('../Components/ReservationPage'));

const NAVIGATION_ROUTES = Object.freeze({
  homePage: {
    path: '/',
    exact: true,
    element: <LandingPage />,
  },
  ReservationPage: {
    path: '/ReservationPage',
    element: <ReservationPage />,
  },
});

export default NAVIGATION_ROUTES;
