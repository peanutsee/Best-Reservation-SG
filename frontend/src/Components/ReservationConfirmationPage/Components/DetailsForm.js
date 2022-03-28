/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { React, useEffect } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import DateForm from './DateForm';
import TimeForm from './TimeForm';
import './app.css';

const SCHEMA = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  email: yup.string().email().required('Email Required'),
  contact: yup
    .string()
    .required('Contact Number Required')
    .matches(/[0-9]{8}/, 'Enter Valid Contact Number')
    .max(8, 'Enter Valid Contact Number'),
});

function AuthDetailsForm() {
  const dispatch = useDispatch();

  const updateHandler = (e) => {};

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
  };

  return (
    <>
      <h1 className="text-center">Enter Your Reservation Details</h1>

      <div className="row">
        <div className="col-6 col-md-4">
          <Form>
            <Form.Label>Reservation Date</Form.Label>
            <Form.Group>
              <DateForm />
            </Form.Group>
          </Form>
        </div>
        <div className="col-6 col-md-4">
          <Form>
            <Form.Label>Reservation Time</Form.Label>
            <Form.Group>
              <TimeForm />
            </Form.Group>
          </Form>
        </div>

        <div className="col-6 col-md-4 border-left border-dark">
          <Form.Group>
            <Form.Label>Number of Guests</Form.Label>
            <Form.Select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
      <Formik validationSchema={SCHEMA} initialValues={initialValues}>
        {({
          handleChange, values, touched, errors,
        }) => (
          <Form noValidate>
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
            <div className="d-grid gap-2">
              <Button className="btn btn-primary my-5">Enter Details</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AuthDetailsForm;
