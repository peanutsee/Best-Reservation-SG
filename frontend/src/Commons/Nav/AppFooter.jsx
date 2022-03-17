import React from 'react';
import {
  Container, Row, Col, ListGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './app.css';

function AppFooter() {
  return (
    <footer className="footer-clean py-5 bg-dark text-white">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="my-3 borderless text-center">
            <h3 className="text-white">Quick Links</h3>
            <ListGroup as="ul">
              <ListGroup.Item>
                <Link className="text-white" to="/aboutus">About Us</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="text-white" to="/faq">FAQ</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="text-white" to="/contactus">Contact Us</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} md={6} className="my-3 borderless text-center">
            <h3 className="text-white">Important Links</h3>
            <ListGroup as="ul">
              <ListGroup.Item>
                <Link className="text-white" to="/termsandcondition">Terms & Conditions</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="text-white" to="/privacypolicy">Privacy Policy</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-4">
          <div className="text-center pt-2">
            <p className="copyright">VolunteerBroz © 2021</p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default AppFooter;
