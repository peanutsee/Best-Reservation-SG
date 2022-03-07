/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { lazy } from 'react';
import ProfilePage from '../Components/ProfilePage';

const LandingPage = lazy(() => import('../Components/LandingPage'));

const NAVIGATION_ROUTES = Object.freeze({
  homePage: {
    path: '/',
    exact: true,
    element: <LandingPage />,
  },
  profilePage: {
    path: '/profile',
    exact: true,
    element: <ProfilePage />,
  },
});

export default NAVIGATION_ROUTES;
