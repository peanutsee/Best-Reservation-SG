/* eslint-disable no-nested-ternary */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import {
  Col, Row, Tab, Nav,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NotificationSettings from "./Components/NotificationSettings";
import ProfileSettings from "./Components/ProfileSettings";
import { retrieveUserProfile } from "./Redux/actions";
import "./app.css";

function ProfilePage() {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfileReducer);
  const { loading, error, userInfo: profile } = userProfile;

  useEffect(() => {
    if (!profile) {
      dispatch(retrieveUserProfile());
    }
  }, [profile]);

  return (
    <div className="p-5">
      {loading ? (
        <h1 className="text-center">Loading Profile...</h1>
      ) : error ? (
        <h1 className="text-center">Error Loading Profile</h1>
      ) : (
        <Tab.Container defaultActiveKey="profile">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column text-center mx-auto">
                <Nav.Item className="mb-3 shadow shadow-100">
                  <Nav.Link eventKey="profile">Profile</Nav.Link>
                </Nav.Item>

                <Nav.Item className="mb-3 shadow shadow-100">
                  <Nav.Link eventKey="notification">Notifications</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content className="shadow shadow-100 p-5">
                <Tab.Pane eventKey="profile">
                  {profile && <ProfileSettings profile={profile} />}
                </Tab.Pane>
                <Tab.Pane eventKey="notification">
                  {profile && <NotificationSettings profile={profile} />}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )}
    </div>
  );
}

export default ProfilePage;
