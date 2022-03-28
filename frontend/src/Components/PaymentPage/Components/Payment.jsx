/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrievePayment } from '../Redux/actions';
import OrderItemList from './OrderItemList';
import Receipt from './Receipt';

function Payment() {
  const params = useParams();
  const dispatch = useDispatch();

  const payment = useSelector((state) => state.retrievePaymentReducer);
  const { loading, error, bill_details } = payment;

  const madePayment = useSelector((state) => state.billPaymentReducer);
  const { success: successPay } = madePayment;

  useEffect(() => {
    if (!bill_details || successPay) {
      dispatch(retrievePayment(params.id));
    }
  }, [dispatch, successPay]);

  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>
          Bill #ID:
          {' '}
          {params.id}
        </strong>
      </h1>
      {loading ? (
        <h1>Loading Receipt...</h1>
      ) : error ? (
        <h1>Error Loading Receipt...</h1>
      ) : (
        <>
          {bill_details && (
            <OrderItemList order_items={bill_details.order_items} />
          )}
          {bill_details && <Receipt bill_details={bill_details} />}
        </>
      )}
    </Container>
  );
}

export default Payment;
