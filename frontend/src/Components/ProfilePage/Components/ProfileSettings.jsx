/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import {
  Form, Button, Row, Col, Alert,
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../Redux/actions';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const SCHEMA = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  email: yup.string().email().required('Email Required'),
  password: yup
    .string()
    .required('Enter password to update profile')
    .min(8, 'Miniumum 8 Characters')
    .max(24, 'Maximum 24 Characters')
    .matches(
      passwordRegex,
      'Password needs to be at least 8 characters long consisting of alphanumeric characters with symbols',
    ),
  confirmPassword: yup
    .string()
    .required('Password must match')
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

function ProfileSettings(props) {
  const { profile } = props;

  const dispatch = useDispatch();

  const profileUpdate = useSelector((state) => state.profileUpdateReducer);
  const { success, error } = profileUpdate;

  const updateHandler = (e) => {
    dispatch(updateProfile(e.firstName, e.lastName, e.email, e.password, e.contact));
  };

  const INTIALVALUES = {
    firstName: profile.first_name,
    lastName: profile.last_name,
    email: profile.email,
    password: '',
    confirmPassword: '',
    contact: profile.contact_number,
  };

  // For toggling show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <h1 className="text-center">Profile Update</h1>
      {success && <Alert variant="success" className="text-center">Profile Update Successfully!</Alert>}
      {error && <Alert variant="danger" className="text-center">Profile Update Unsuccessful!</Alert>}

      <Formik
        validationSchema={SCHEMA}
        onSubmit={updateHandler}
        initialValues={INTIALVALUES}
      >
        {({
          handleSubmit, handleChange, values, touched, errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row xs={1} md={2}>
              <Col>
                <Form.Group className="mb-3" controlId="validationFormik01">
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
                <Form.Group className="mb-3" controlId="validationFormik02">
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
                <Form.Group className="mb-3" controlId="validationFormik03">
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
                <Form.Group className="mb-3" controlId="validationFormik04">
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
                <Form.Group className="mb-3" controlId="validationFormik05">
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
                <Form.Group className="mb-3" controlId="validationFormik06">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
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
              >
                Update
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ProfileSettings;
