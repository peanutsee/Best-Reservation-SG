/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import { React, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const INTIALVALUES = {
  email: '',
  password: '',
};

const SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email Required'),
  password: yup.string().required('Password Required'),
});

function AuthenticationPage() {
  const loginHandler = () => {};

  // For toggling show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container className="p-5">
      <div className="p-5 shadow shadow-100">
        <h1 className="text-center">
          Welcome back!
        </h1>
        <Formik
          validationSchema={SCHEMA}
          onSubmit={loginHandler}
          initialValues={INTIALVALUES}
        >
          {({
            handleSubmit, handleChange, values, touched, errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
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
                />
                {errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                )}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationFormik02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  isValid={touched.password && !errors.password}
                  feedback={errors.password}
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
              <Link to="/email_verification">Forgot password?</Link>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="btn btn-primary my-5"
                  text="Sign In"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <p>
          Need an account?
          {' '}
          <Link to="/registration">Sign up here</Link>
        </p>
      </div>
    </Container>
  );
}

export default AuthenticationPage;
