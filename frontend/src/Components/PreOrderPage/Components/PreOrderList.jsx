/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Table, Image, FormControl, Button,
} from "react-bootstrap";
import '../App.css';

function PreOrderList() {
  return (
    <Table style={{ width: 600 }}>
      <tbody>
        <tr>
          <td style={{ width: 176, paddingLeft: 12, height: 180 }}>
            <Image fluid className="w-70" src="static/assets/burgers.jpg" width={176} height={180} />
          </td>
          <td>Hamburger</td>
          <td width={150}>
            <FormControl
              className="text-center"
              size="smaller-input"
              value="1"
            />
          </td>
          <td>$15.00</td>
          <td>
            <Button variant="light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
              </svg>
            </Button>
          </td>
        </tr>
        <tr>
          <td style={{ width: 176, paddingLeft: 12, height: 180 }}>
            <Image fluid className="w-70" src="static/assets/fries.jpg" width={176} height={180} />
          </td>
          <td>Fries</td>
          <td width={150}>
            <FormControl
              className="text-center"
              size="smaller-input"
              value="1"
            />
          </td>
          <td>$10.00</td>
          <td>
            <Button variant="light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
              </svg>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PreOrderList;
