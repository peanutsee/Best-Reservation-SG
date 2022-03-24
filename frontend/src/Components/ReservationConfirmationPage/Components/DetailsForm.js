/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import DateForm from './DateForm';
import TimeForm from './TimeForm';
import './app.css';

function DetailsForm() {
  return (
    <div className="p-5 shadow shadow-100 row">
      <h1 className="pb-3 text-center">Enter your reservation details</h1>
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
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
      <div className="d-grid gap-2">
        <Button
          type="submit"
          className="btn btn-primary my-5"
          text="Enter Details"
        >
          Enter Details
        </Button>
      </div>
    </div>
  );
}

export default DetailsForm;
