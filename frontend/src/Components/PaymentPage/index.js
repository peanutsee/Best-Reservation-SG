/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import { React, useState } from 'react';
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Image,
  Modal,
  Form,
} from 'react-bootstrap';

function PaymentPage() {
  const [paymentComplete, setPaymentComplete] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const togglePayment = () => {
    setPaymentComplete(!paymentComplete);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>Final Order #ID</strong>
      </h1>
      <Table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Items</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken Burger</td>
            <td>3</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>Fried Rice</td>
            <td>1</td>
            <td>$4.00</td>
          </tr>
          <tr>
            <td>Ban Mian</td>
            <td>1</td>
            <td>$3.00</td>
          </tr>
        </tbody>
      </Table>
      <Row>
        {paymentComplete === true
          ? (
            <Col md={{ span: 4, offset: 2 }}>
              <Image fluid className="w-70" src="/static/assets/paid.png" />
            </Col>
          )
          : null}
        <Col>
          <Table className="d-flex justify-content-end">
            <tbody>
              <tr>
                <td>Total Bill:</td>
                <td>$XX.XX</td>
              </tr>
              <tr>
                <td>Add Tax:</td>
                <td>$XX.XX</td>
              </tr>
              <tr>
                <td>Minus Deposit:</td>
                <td>$XX.XX</td>
              </tr>
              <tr>
                <td>Final Bill:</td>
                <td>$XX.XX</td>
              </tr>
            </tbody>
          </Table>
        </Col>

      </Row>

      <div className="d-flex justify-content-end">
        {paymentComplete === true
          ? (
            <>
              <Button onClick={handleShow}>
                Tap to Split
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Share with friends</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}>
                        URL
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control readOnly defaultValue="https://finalOrder.com" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}>
                        Password
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control readOnly defaultValue="P@ssw0rd" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button>
                    Copy
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )
          : (
            <Button>
              Tap to Pay
            </Button>
          )}
      </div>

    </Container>

  );
}

export default PaymentPage;
