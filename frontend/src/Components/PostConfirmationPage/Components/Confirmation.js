/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Pdf from 'react-to-pdf';
import { getConfirmedReservation } from '../Redux/actions';
import EditLinkPopUpModal from './EditLink';
import LinkPopUpModal from './PostReservationLink';

const ref = React.createRef();

function Confirmation() {
  const dispatch = useDispatch();
  const params = useParams();
  const [editLinkModal, setEditLinkModal] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  const getConfirmReservation = useSelector(
    (state) => state.getConfirmedReservationReducer,
  );
  const {
    loading, error, reservation,
  } = getConfirmReservation;

  useEffect(() => {
    dispatch(getConfirmedReservation(params.id));
    if (passwordChange === true) {
      setPasswordChange(false);
      // show Reservation Link instead of Edit Reservation Link, after pw change
      setShowLink(true);
    }
  }, [dispatch, passwordChange]);
  return (
    <Container ref={ref} className="px-5">
      <h1> Reservation Confirmation </h1>
      { loading ? (
        <h1>Loading confirmed Reservation...</h1>
      ) : error ? (
        <h1>Error Loading Reservations...</h1>
      ) : (
        <div className=" pt-5 row">
          {reservation && (/* Again this is needed */
            <>
              <div className="col-6">
                <h3 className="pb-3"> Your Details </h3>
                <h5>Name</h5>
                <p>{reservation.reservation_owner}</p>
                <h5>Reservation Date</h5>
                <p>
                  {reservation.reservation_date}
                </p>
                <h5>Number of Guests</h5>
                <p>{reservation.reservation_pax}</p>
                <h5>Reservation Time</h5>
                <p>{reservation.reservation_time}</p>
                <Link to="/">
                  <div className="d-grid gap-2">
                    <Button className="mt-1" size="md">
                      Go to home page
                    </Button>

                  </div>
                </Link>
                <br />
                <Link to={`/preorder/${reservation.pre_order_id}`}>
                  <div className="d-grid gap-2">
                    <Button variant="success" className="mb-3" size="md">I want to order</Button>
                  </div>
                </Link>
              </div>

              <div className="col-6">
                <Pdf targetRef={ref} filename="reservation-confirmation.pdf">
                  {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                </Pdf>
                {' '}
                { !showLink ? (
                  /* if showLink == false(by default),show editLink, else show CopyLink */
                  <Button onClick={() => setEditLinkModal(true)}>
                    Edit Reservation Link
                  </Button>
                ) : (
                  <Button onClick={() => setLinkModal(true)}>
                    Reservation Link
                  </Button>
                )}
                <EditLinkPopUpModal
                  reservation={reservation}
                  setEditLinkModal={setEditLinkModal}
                  setPasswordChange={setPasswordChange}
                  show={editLinkModal}
                  onHide={() => setEditLinkModal(false)}
                />
                <LinkPopUpModal
                  reservation={reservation}
                  setLinkModal={setLinkModal}
                  show={linkModal}
                  onHide={() => setLinkModal(false)}
                />
              </div>
            </>
          )}
        </div>
      )}
    </Container>

  );
}

export default Confirmation;
