/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { React, useEffect, useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
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

function AuthDetailsForm(props) {
  const {
    userInfo, setReservationDate, setReservationTime, setNGuest,
  } = props;

  // const [reservationDate, setReservationDate] = useState('');
  const dispatch = useDispatch();

  const initialValues = {
    firstName: userInfo.first_name,
    lastName: userInfo.last_name,
    email: userInfo.email,
    contact: userInfo.contact,
  };
  const date = new Date();
  date.setDate(date.getDate() + 2);

  return (
    <div className="p-5 shadow shadow-100 row">
      <h1 className="text-center">Enter Your Reservation Details</h1>
      <div className="row">
        <div className="col-6 col-md-4">
          <Form>
            <Form.Label>Reservation Date</Form.Label>
            <Form.Group>
              <Form.Control
                required="required"
                type="date"
                onChange={(e) => setReservationDate(e.target.value)}
                min={date.toISOString().split('T')[0]}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="col-6 col-md-4">
          <Form>
            <Form.Label>Reservation Time</Form.Label>
            <Form.Group>
              <Form.Control
                type="time"
                onChange={(e) => setReservationTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>

        <div className="col-6 col-md-4">
          <Form.Group>
            <Form.Label>Number of Guests</Form.Label>
            <Form.Select onChange={(e) => setNGuest(e.target.value)}>
              <option>Select Number of Pax</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
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
                    placeholder={initialValues.firstName}
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
                    placeholder={initialValues.lastName}
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
                    placeholder={initialValues.email}
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
                    placeholder={initialValues.contact}
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AuthDetailsForm;
