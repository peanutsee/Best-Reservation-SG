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

const INTIALVALUES = {
  email: '',
};

const SCHEMA = yup.object().shape({
  email: yup.string().email('Must be a valid email address').required('Email Required'),
});

function EmailVerificationPage() {
  const emailVerificationHandler = () => {};

  return (
    <Container className="py-5 my-5">
      <Form className="p-5 shadow shadow-100">
        <h1 className="text-center">
          <strong>Don't worry, we gotcha!</strong>
        </h1>
        <Formik
          validationSchema={SCHEMA}
          onSubmit={emailVerificationHandler}
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

              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="btn btn-primary my-5"
                  text="Sign In"
                >
                  Send
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Form>
    </Container>
  );
}

export default EmailVerificationPage;
