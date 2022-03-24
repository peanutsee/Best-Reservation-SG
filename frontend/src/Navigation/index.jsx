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
const SplitBillPage = lazy(() => import('../Components/SplitBillPage'));
const PreOrderPage = lazy(() => import('../Components/PreOrderPage'));
const RestaurantPage = lazy(() => import('../Components/RestaurantPage'));
const ReservationConfirmationPage = lazy(() => import('../Components/ReservationConfirmationPage'));
const ReservationInfoPage = lazy(() => import('../Components/ReservationInfoPage'));
const ProportionViewPage = lazy(() => import('../Components/ProportionViewPage'));
const PostConfirmationPage = lazy(() => import('../Components/PostConfirmationPage'));

const NAVIGATION_ROUTES = Object.freeze({
  // Misc Routes
  homePage: {
    path: '/',
    exact: true,
    element: <LandingPage />,
  },

  profilePage: {
    path: '/profile',
    element: <ProfilePage />,
  },

  // Authentication Routes
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

  // Reservation Routes
  ReservationPage: {
    path: '/reservation',
    element: <ReservationPage />,
  },
  ReservationInfoPage: {
    path: '/reservation_info/:id',
    element: <ReservationInfoPage />,
  },

  // Payment Routes
  paymentPage: {
    path: '/payment/:id',
    element: <PaymentPage />,
  },
  splitBillPage: {
    path: '/split_bill/:id',
    element: <SplitBillPage />,
  },

  proportionViewingPage: {
    path: '/proportion_view',
    element: <ProportionViewPage />,
  },

  // Pre-Order Routes
  preOrderPage: {
    path: '/preorder/:id',
    element: <PreOrderPage />,
  },

  // Restaurant Routes
  restaurantPage: {
    path: '/restaurant/:id',
    element: <RestaurantPage />,
  },

  // Reservation Routes
  reservationConfirmationPage: {
    path: '/reservation_confirmation/:id',
    element: <ReservationConfirmationPage />,
  },

  postConfirmationPage: {
    path: '/post_confirmation/:id',
    element: <PostConfirmationPage />,
  },
});

export default NAVIGATION_ROUTES;
