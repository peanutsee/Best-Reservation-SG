/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import { React, useState, useEffect } from 'react';
import {
  Form, Button, Row, Col, Alert,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../Redux/actions';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const INTIALVALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  contact: '',
};

const SCHEMA = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  email: yup.string().email().required('Email Required'),
  password: yup
    .string()
    .required('Required')
    .min(8, 'Miniumum 8 Characters')
    .max(24, 'Maximum 24 Characters')
    .matches(
      passwordRegex,
      'Password needs to be at least 8 characters long consisting of alphanumeric characters with symbols',
    ),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf(
      [yup.ref('password'), null],
      'Password Must Match',
      'Minimum 8 Characters\nMaximum 24 Characters',
    ),
  contact: yup
    .string()
    .required('Contact Number Required')
    .matches(/[0-9]{8}/, 'Enter Valid Contact Number')
    .max(8, 'Enter Valid Contact Number'),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegistration = useSelector(
    (state) => state.userRegistrationReducer,
  );
  const { success, error, userInfo } = userRegistration;

  const registrationHandler = (e) => {
    dispatch(
      registration(e.firstName, e.lastName, e.email, e.password, e.contact),
    );
  };

  // For toggling show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  return (
    <div className="p-5 shadow shadow-100">
      <h1 className="text-center">We're excited to have you onboard!</h1>
      {success && (
        <Alert variant="success">User Registration Successful!</Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}

      <Formik
        validationSchema={SCHEMA}
        onSubmit={registrationHandler}
        initialValues={INTIALVALUES}
      >
        {({
          handleSubmit, handleChange, values, touched, errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row xs={1} md={2}>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                    isValid={touched.firstName && !errors.firstName}
                    feedback={errors.firstName}
                    placeholder="John"
                  />
                  {errors.firstName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                    isValid={touched.lastName && !errors.lastName}
                    feedback={errors.lastName}
                    placeholder="Apple"
                  />
                  {errors.lastName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    isValid={touched.email && !errors.email}
                    feedback={errors.email}
                    placeholder="john.apple@helloworld.com"
                  />
                  {errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                  )}
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
                    isInvalid={!!errors.contact}
                    isValid={touched.contact && !errors.contact}
                    feedback={errors.contact}
                    placeholder="1234 5678"
                  />
                  {errors.contact && (
                  <Form.Control.Feedback type="invalid">
                    {errors.contact}
                  </Form.Control.Feedback>
                  )}
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row xs={1} md={2}>
              <Col>
                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    isValid={touched.password && !errors.password}
                    feedback={errors.password}
                    placeholder="*********"
                  />
                  {errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                  )}
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                  onClick={togglePassword}
                >
                  <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type={passwordShown ? 'text' : 'password'}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    isValid={touched.confirmPassword && !errors.confirmPassword}
                    feedback={errors.confirmPassword}
                    placeholder="*********"
                  />
                  {errors.confirmPassword && (
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                  )}
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid gap-2">
              <Button
                type="submit"
                className="btn btn-primary my-5"
                text="Sign In"
              >
                Register
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <p>
        Already have an account?
        {' '}
        <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
}

export default RegistrationForm;
