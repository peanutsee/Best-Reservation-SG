/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { lazy } from 'react';

const Login = lazy(() => import('../Components/AuthenticationPage'));
const LandingPage = lazy(() => import('../Components/LandingPage'));
const EmailVerification = lazy(() => import('../Components/EmailVerificationPage'));
const PasswordReset = lazy(() => import('../Components/PasswordResetPage'));
const Registration = lazy(() => import('../Components/RegistrationPage'));

const NAVIGATION_ROUTES = Object.freeze({
  homePage: {
    path: '/',
    exact: true,
    element: <LandingPage />,
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
});

export default NAVIGATION_ROUTES;
