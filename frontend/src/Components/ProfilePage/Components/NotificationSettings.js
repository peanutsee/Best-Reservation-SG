/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function NotificationSettings() {
  const [smsNotif, setSmsNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);

  const updateNotifHandler = (e) => {
    e.preventDefault();
  };

  const deleteAccountHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="text-center">Notification Updates</h1>
      <div id="notification">
        <h3>Notifications</h3>
        <Form onSubmit={updateNotifHandler}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="SMS Notification"
              checked={smsNotif}
              onChange={(e) => setSmsNotif(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Email Notification"
              checked={emailNotif}
              onChange={(e) => setEmailNotif(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="btn btn-primary">
              Update
            </Button>
          </div>
        </Form>
      </div>
      <div id="delete-account">
        <h3>Account Management</h3>
        <Form onSubmit={deleteAccountHandler}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            THIS ACTION IS NON-REVERSIBLE
          </Form.Text>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="btn btn-danger">
              Delete
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default NotificationSettings;
