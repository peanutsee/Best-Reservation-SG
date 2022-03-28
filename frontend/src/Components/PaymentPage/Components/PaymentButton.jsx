/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPin } from '../Redux/actions';

function PaymentButton(props) {
  const { bill_details, payment } = props;
  const [show, setShow] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  // Add PayPal Script
  const addPayPalScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypal.com/sdk/js?client-id=AblsefRPw4Dp2V1_u2Dd6MY-IYJUe3OvtFXU0o5XDz-IKjsDC1MmHtguz4ExhBYMvlCtwekZLVZhxy8W&currency=SGD';
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  // Dispatch Payment Update
  const handlePayment = (paymentResult) => {
    if (paymentResult.status === 'COMPLETED') {
      dispatch(payment(bill_details.id));
    }
  };

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
    if (!bill_details.bill_is_paid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [bill_details, sdkReady]);

  if (bill_details.bill_is_paid) {
    return (
      <div className="d-flex justify-content-end">
        <Button onClick={handleShow}>Split Bill</Button>
        <PaymentModal
          show={show}
          onHide={() => setShow(false)}
          url={bill_details.bill_url}
          copyToClipboard={copyToClipboard}
        />
      </div>
    );
  }
  if (!bill_details.bill_is_paid) {
    return (
      <div className="d-flex justify-content-end px-5">
        <PayPalButton
          amount={bill_details.after_tax_bill}
          onSuccess={handlePayment}
        />
      </div>
    );
  }
}

function PaymentModal(props) {
  const dispatch = useDispatch();
  const params = useParams();

  const { copyToClipboard, url } = props;

  const [password, setPassword] = useState('');

  const pin = useSelector((state) => state.setPasswordReducer);
  const { success } = pin;

  const handlePassword = (e) => {
    e.preventDefault();
    if (password !== '') {
      dispatch(setPin(params.id, password));
    }
  };

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
            {success && <Form.Text>Password set successfully!</Form.Text>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {!success && (
          <Button
            title="Set Pin"
            disabled={password === ''}
            onClick={(e) => handlePassword(e)}
          >
            Set Password
          </Button>
        )}
        {success && (
          <Button
            onClick={() => {
              copyToClipboard(
                `URL: ${url}\nPassword: ${password}\nPlease share this with your friends before commencing the proportioning process :)`,
              );
            }}
          >
            Copy
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentButton;
