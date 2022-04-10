/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateNotifications, deleteProfile } from '../Redux/actions';

function NotificationSettings(props) {
  const { profile } = props;
  const [smsNotif, setSmsNotif] = useState(profile.sms_notification);
  const [emailNotif, setEmailNotif] = useState(profile.email_notification);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notificationUpdate = useSelector((state) => state.notificationUpdateReducer);
  const { success, error } = notificationUpdate;

  const updateNotifHandler = (e) => {
    e.preventDefault();
    dispatch(updateNotifications(smsNotif, emailNotif));
  };

  const deleteAccountHandler = (e) => {
    e.preventDefault();
    dispatch(deleteProfile());
    navigate('/');
  };

  return (
    <>
      <h1 className="text-center">Notification Updates</h1>
      {success && <Alert variant="success" className="text-center">Profile Update Successfully!</Alert>}
      {error && <Alert variant="danger" className="text-center">Profile Update Unsuccessful!</Alert>}

      <div id="notification">
        <h3>Notifications</h3>
        <Form onSubmit={updateNotifHandler}>
          <Form.Group className="mb-3" controlId="smsNotificationCB">
            <Form.Check
              type="switch"
              label="SMS Notification"
              checked={smsNotif}
              onChange={() => setSmsNotif(!smsNotif)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailNotificationCB">
            <Form.Check
              type="switch"
              label="Email Notification"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
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
