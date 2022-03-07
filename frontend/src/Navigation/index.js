/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { lazy } from 'react';
import ProfilePage from '../Components/ProfilePage';

const Login = lazy(() => import('../Components/AuthenticationPage'));
const LandingPage = lazy(() => import('../Components/LandingPage'));
const ReservationPage = lazy(() => import('../Components/ReservationPage'));
const EmailVerification = lazy(() => import('../Components/EmailVerificationPage'));
const PasswordReset = lazy(() => import('../Components/PasswordResetPage'));
const Registration = lazy(() => import('../Components/RegistrationPage'));

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
  login: {
    path: '/login',
    element: <Login />,
  },
  emailVerify: {
    path: '/email_verification',
    element: <EmailVerification />,
  },
  passwordReset: {
    path: '/password_reset',
    element: <PasswordReset />,
  },
  registration: {
    path: '/registration',
    element: <Registration />,
  },
  profilePage: {
    path: '/profile',
    exact: true,
    element: <ProfilePage />,
  }
});

export default NAVIGATION_ROUTES;
