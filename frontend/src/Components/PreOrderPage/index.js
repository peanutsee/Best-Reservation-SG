/* eslint-disable react/jsx-filename-extension */

import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
  Stack,
} from 'react-bootstrap';

function PreOrderPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <h3 className="ms-5">Order #ID</h3>
        <div className="ms-5">
          <Button variant="dark" onClick={handleShow}>
            Share
          </Button>
        </div>
      </Stack>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Share Pre-Order Link with Friends!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Auto-generated Link</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Copy Link</Button>
          <Button variant="primary">Close</Button>
        </Modal.Footer>
      </Modal>
      { /* to increment this id counter later */ }
    </>
  );
}

export default PreOrderPage;
