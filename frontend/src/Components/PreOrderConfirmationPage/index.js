/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Table, Image, FormControl, Row, Col, Button,
} from 'react-bootstrap';
import './App.css';

function PreOrderConfirmationPage() {
  return (
    <Container className="py-5 my-5">
      <Row>
        <h1 className="text-left">
          <strong>Confirmation for Order #ID</strong>
        </h1>
      </Row>
      <Row>
        <Col>
          <Table style={{ width: 600 }}>
            <tbody>
              <tr>
                <td style={{ width: 176, paddingLeft: 0, height: 180 }}>
                  <Image fluid className="w-70" src="static/assets/burgers.jpg" width={176} height={180} />
                </td>
                <td>Hamburger</td>
                <td width={120}>
                  <FormControl
                    className="text-center"
                    size="smaller-input"
                    value="1"
                  />
                </td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td style={{ width: 176, paddingLeft: 0, height: 180 }}>
                  <Image fluid className="w-70" src="static/assets/fries.jpg" width={176} height={180} />
                </td>
                <td>Fries</td>
                <td width={120}>
                  <FormControl
                    className="text-center"
                    size="smaller-input"
                    value="1"
                  />
                </td>
                <td>$10.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col md={{ offset: 2 }}>
          <p className="text-right">
            <strong>Bill #ID</strong>
          </p>
          <Table id="Table2">
            <tbody id="Table2">
              <tr>
                <td id="Table2">Total:</td>
                <td>$XX.XX</td>
              </tr>
              <tr>
                <td id="Table2">GST:</td>
                <td>$XX.XX</td>
              </tr>
              <tr>
                <td id="Table2">Final:</td>
                <td>$XX.XX</td>
              </tr>
            </tbody>
          </Table>
          <Button>Confirm</Button>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PreOrderConfirmationPage;
