import React from 'react';
import {
  Container, Row, Col, ListGroup, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppFooter() {
  return (
    <footer className="footer-clean bg-light py-5">
      <Container>
        <div className="d-flex justify-content-center align-center">
          <Button onClick={() => window.scrollTo(0, 0)}>
            <i className="fas fa-chevron-up" />
            <div>Scroll to Top</div>
          </Button>
        </div>
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="my-3 borderless text-center">
            <h4>Quick Links</h4>
            <ListGroup as="ul">
              <ListGroup.Item>
                <Link to="/aboutus">About Us</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/faq">FAQ</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/contactus">Contact Us</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} md={6} className="my-3 borderless text-center">
            <h4>Important Links</h4>
            <ListGroup as="ul">
              <ListGroup.Item>
                <Link to="/termsandcondition">Terms & Conditions</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/privacypolicy">Privacy Policy</Link>
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
