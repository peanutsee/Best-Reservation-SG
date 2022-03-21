/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function PaymentButton(props) {
  const { bill_details } = props;
  const url = 'www.google.com';
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

  if (bill_details.bill_is_paid) {
    return (
      <>
        <Button onClick={handleShow}>Split Bill</Button>
        <PaymentModal
          show={show}
          onHide={() => setShow(false)}
          url={url}
          copyToClipboard={copyToClipboard}
        />
      </>
    );
  }
  return <Button>Make Payment</Button>;
}

function PaymentModal(props) {
  const { copyToClipboard, url } = props;

  const [password, setPassword] = useState('');

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Share with friends</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>URL</Form.Label>
            <Form.Control readOnly defaultValue={url} />
            <Form.Text>Read only... You can&apos;t change the URL :P</Form.Text>
          </Form.Group>

          <Form.Group lassName="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="6 Digit Pin"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            copyToClipboard(`URL: ${url}\nPassword: ${password}\nPlease share this with your friends before commencing the proportioning process :)`);
          }}
        >
          Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentButton;

// {bill_details && (
//   <div className="d-flex justify-content-end">
//     {bill_details.bill_is_paid === true ? (
//       <>
//         <Button onClick={handleShow}>Tap to Split</Button>
//
//       </>
//     ) : (
//       <Button>Tap to Pay</Button>
//     )}
//   </div>
// )}
