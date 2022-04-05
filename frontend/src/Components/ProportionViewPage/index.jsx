import { React } from 'react';
import { Container } from 'react-bootstrap';
import AcceptRejectOption from './Components/AcceptRejectOption';
import Proportions from './Components/Proportions';

function ProportionViewPage() {
  return (
    <Container className="py-5 my-5">
      <Proportions />
      <AcceptRejectOption />
    </Container>
  );
}

export default ProportionViewPage;
