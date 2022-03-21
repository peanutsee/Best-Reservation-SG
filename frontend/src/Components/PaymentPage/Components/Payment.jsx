/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrievePayment } from '../Redux/actions';

function Payment() {
  const params = useParams();
  const dispatch = useDispatch();

  const payment = useSelector((state) => state.retrievePaymentReducer);
  const { loading, error, bill_details } = payment;

  const [paymentComplete, setPaymentComplete] = useState(true);
  const togglePayment = () => {
    setPaymentComplete(!paymentComplete);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  useEffect(() => {
    if (!bill_details) {
      dispatch(retrievePayment(params.id));
    }
  }, [dispatch]);

  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>
          Bill #ID:
          {' '}
          {params.id}
        </strong>
      </h1>
      <Table className="table table-striped table-sm">
        {/* TODO: LIST ALL ORDER ITEMS */}
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
      {bill_details && (
        <Row>
          {bill_details.bill_is_paid === true ? (
            <Col md={{ span: 4, offset: 2 }}>
              <Image fluid className="w-70" src="/static/assets/paid.png" />
            </Col>
          ) : null}
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
      )}

      {bill_details && (
        <div className="d-flex justify-content-end">
          {bill_details.bill_is_paid === true ? (
            <>
              <Button onClick={handleShow}>Tap to Split</Button>
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
                        <Form.Control
                          readOnly
                          defaultValue="https://finalOrder.com"
                        />
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
                  <Button
                    onClick={() => {
                      copyToClipboard(
                        'Final order URL: '
                          + 'https://finalOrder.com\n'
                          + 'Password: '
                          + 'P@ssw0rd',
                      );
                    }}
                  >
                    Copy
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ) : (
            <Button>Tap to Pay</Button>
          )}
        </div>
      )}
    </Container>
  );
}

export default Payment;
