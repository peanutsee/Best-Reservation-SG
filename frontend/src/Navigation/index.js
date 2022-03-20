/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { lazy } from 'react';

const Login = lazy(() => import('../Components/AuthenticationPage'));
const LandingPage = lazy(() => import('../Components/LandingPage'));
const ReservationPage = lazy(() => import('../Components/ReservationPage'));
const EmailVerification = lazy(() => import('../Components/EmailVerificationPage'));
const PasswordReset = lazy(() => import('../Components/PasswordResetPage'));
const Registration = lazy(() => import('../Components/RegistrationPage'));
const ProfilePage = lazy(() => import('../Components/ProfilePage'));
const PaymentPage = lazy(() => import('../Components/PaymentPage'));
const AccessPage = lazy(() => import('../Components/AccessPage'));
const SplitBillPage = lazy(() => import('../Components/SplitBillPage'));

const NAVIGATION_ROUTES = Object.freeze({
  homePage: {
    path: '/',
    exact: true,
    element: <LandingPage />,
  },
  ReservationPage: {
    path: '/reservation',
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
    element: <ProfilePage />,
  },
  paymentPage: {
    path: '/payment',
    element: <PaymentPage />,
  },
  accessPage: {
    path: '/access',
    element: <AccessPage />,
  },
  splitBillPage: {
    path: '/split_bill',
    element: <SplitBillPage />,
  },
});

export default NAVIGATION_ROUTES;
