import { React } from 'react';
import { Container } from 'react-bootstrap';
import AcceptRejectOption from './Components/AcceptRejectOption';
import ProportionTable from './Components/ProportionTable';

function ProportionViewPage() {
  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>Proportions</strong>
      </h1>
      <p className="text-left">
        Please view the submitted proportions.
        <br />
        If everything seems fine, accept the proportion to split the bill!
      </p>
      <ProportionTable />
      <AcceptRejectOption />
    </Container>
  );
}

export default ProportionViewPage;
