import { React, useState } from 'react';
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Modal,
} from 'react-bootstrap';

function ProportionViewPage() {
  const [show, setShow] = useState(false);
  const [clickAccept, setClickAccept] = useState(false);

  const handleClose = () => {
    setShow(false);
    setClickAccept(false);
  };
  const handleShow = () => setShow(true);

  const clickedAccept = () => {
    setClickAccept(true);
    handleShow();
  };

  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>
          Proportions
        </strong>
      </h1>
      <h4 className="text-left">
        Please view the submitted proportions.
      </h4>
      <h4>
        If everything seems fine, accept the proportion to split the bill!
      </h4>

      <h2 className="pt-5">
        Your Proportion
      </h2>
      <Table>
        <thead>
          <tr>
            <th scope="col" width="220">
              Items
            </th>
            <th scope="col" width="220">
              Unit Price
            </th>
            <th scope="col" width="10">
              Portions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fried Rice</td>
            <td>5.00</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Salad</td>
            <td>4.00</td>
            <td>2</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="pt-5">
        @john_doe&apos;s Proportions
      </h2>
      <Table>
        <thead>
          <tr>
            <th scope="col" width="220">
              Items
            </th>
            <th scope="col" width="220">
              Unit Price
            </th>
            <th scope="col" width="10">
              Portions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nasi Lemak</td>
            <td>3.00</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Fruit Salad</td>
            <td>4.00</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Apple Juice</td>
            <td>2.00</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="pt-5">
        @maria_lee&apos;s Proportions
      </h2>
      <Table>
        <thead>
          <tr>
            <th scope="col" width="220">
              Items
            </th>
            <th scope="col" width="220">
              Unit Price
            </th>
            <th scope="col" width="10">
              Portions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Roti Prata</td>
            <td>2.00</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Fish Head Curry</td>
            <td>5.00</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Mango Lassi</td>
            <td>3.00</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
      <Row className="pt-5 block-example border border-dark rounded mb-0">
        <Col>
          <h4>
            Do you accept the proportions?
          </h4>
        </Col>
        <Col className="d-flex justify-content-end mb-3">
          <Button className="me-5" variant="success" onClick={clickedAccept}>Accept</Button>
          <Button variant="danger" onClick={handleShow}>Reject</Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {clickAccept === true
            ? (<Modal.Title>Accept Proportions?</Modal.Title>)
            : (<Modal.Title>Reject Proportions?</Modal.Title>)}

        </Modal.Header>
        {clickAccept === true
          ? (<Modal.Body>Are you sure you want to accept the proportions?</Modal.Body>)
          : (<Modal.Body>Are you sure you want to reject the proportions?</Modal.Body>)}
        <Modal.Footer>
          <Button variant="success">
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProportionViewPage;
