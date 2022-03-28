/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function PaymentButton(props) {
  const { payment } = props;
  const [paid, setPaid] = useState(false);
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
    if (!paid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [paid]);

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button onClick={handleShow}>Pay Deposit</Button>
        <PaymentModal
          setPaid={setPaid}
          show={show}
          onHide={() => setShow(false)}
          copyToClipboard={copyToClipboard}
        />
      </div>
      <div className="d-flex justify-content-end px-5">
        <PayPalButton
          amount={20.00}
        />
      </div>
      );
    </>
  );
}

function PaymentModal(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const { copyToClipboard, url, setPaid } = props;

  const [password, setPassword] = useState('');

  const handlePassword = (e) => {
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
            <Form.Text>Password set successfully!</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>

        <Button
          title="Set Pin"
          disabled={password === ''}
          onClick={(e) => handlePassword(e)}
        >
          Set Password
        </Button>

        <Button
          onClick={() => {
            copyToClipboard(
              `URL: ${url}\nPassword: ${password}\nPlease share this with your friends before commencing the proportioning process :)`,
            );
          }}
        >
          Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentButton;
