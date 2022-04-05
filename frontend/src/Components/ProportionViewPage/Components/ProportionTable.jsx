/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProportions } from '../Redux/actions';

function ProportionTable() {
  const params = useParams();
  const bill_detail_id = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProportions(bill_detail_id));
  }, []);
  return (
    <>
      <h2 className="pt-5">Your Proportions</h2>
      <Table className="table table-striped table-sm">
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
      <h2 className="pt-5">@john_doe&apos;s Proportions</h2>
      <Table className="table table-striped table-sm">
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
      <h2 className="pt-5">@maria_lee&apos;s Proportions</h2>
      <Table className="table table-striped table-sm">
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
    </>
  );
}

export default ProportionTable;
