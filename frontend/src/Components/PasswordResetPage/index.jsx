/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Form,
  Button,
  Container,
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const INTIALVALUES = {
  password: '',
  confirmPassword: '',
};

const SCHEMA = yup.object().shape({
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
});

function PasswordResetPage() {
  const passwordResetHandler = () => {};

  return (
    <Container className="py-5 my-5">
      <Form className="p-5 shadow shadow-100">
        <h1 className="text-center">
          <strong>New Password!</strong>
        </h1>
        <Formik
          validationSchema={SCHEMA}
          onSubmit={passwordResetHandler}
          initialValues={INTIALVALUES}
        >
          {({
            handleSubmit, handleChange, values, touched, errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationFormik02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
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

              <Form.Group className="mb-3" controlId="validationFormik04">
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
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="btn btn-primary my-5"
                  text="Reset Password"
                >
                  Reset Password

                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Form>
    </Container>
  );
}

export default PasswordResetPage;
