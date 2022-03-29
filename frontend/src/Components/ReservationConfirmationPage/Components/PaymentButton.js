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

  useEffect(() => {
    if (!paid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [paid, sdkReady]);

  return (
    <div className="d-flex justify-content-end px-5">
      <PayPalButton
        amount={20.00}
      />
    </div>
  );
}

export default PaymentButton;
